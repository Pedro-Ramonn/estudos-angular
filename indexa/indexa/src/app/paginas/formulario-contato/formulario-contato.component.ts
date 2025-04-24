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
import { RouterLink } from '@angular/router';
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

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.inicializarFormulario();
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
    if (this.contatoForm.valid) {
      const novoContato = this.contatoForm.value;
      this.contatoService.SalvarContato(novoContato);
    }
  }

  public cancelar() {
    this.contatoForm.reset(); //reseta o formulário
  }
}
