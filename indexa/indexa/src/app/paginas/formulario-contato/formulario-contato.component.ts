import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    SeparadorComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor(
   private contatoService: ContatoService,
   private router: Router,
   private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarContato();
  }

  public carregarContato(){
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //pega o id da rota
    if (id) {
      this.contatoService.obterContatoPorId(Number(id)).subscribe((contato) => {
        this.contatoForm.patchValue(contato); //preenche o formulário com os dados do contato
      });
    }
  }

  public inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required), //cria o controle de formulário nome
      telefone: new FormControl('', Validators.required), //cria o controle de formulário telefone
      email: new FormControl('', Validators.required), //cria o controle de formulário email
      aniversario: new FormControl(''), //cria o controle de formulário aniversario
      redes: new FormControl(''), //cria o grupo de controles de formulário redes
      observacoes: new FormControl(''), //cria o controle de formulário observacoes
    });
  }

  public salvarContato() {
    const novoContato = this.contatoForm.value; //pega os valores do formulário
    const id = this.activatedRoute.snapshot.paramMap.get('id'); //pega o id da rota
    if (id) {
      novoContato.id = Number(id); //adiciona o id ao contato
    } else { novoContato.id = null; } //se não tiver id, adiciona null
    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset(); //reseta o formulário
      this.router.navigate(['/contatos']); //redireciona para a página de contatos
    });
  }

  public cancelar() {
    this.contatoForm.reset(); //reseta o formulário
  }
}
