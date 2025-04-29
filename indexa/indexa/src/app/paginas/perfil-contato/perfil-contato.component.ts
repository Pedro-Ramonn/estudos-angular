import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Contato } from '../lista-contatos/lista-contatos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    ContainerComponent, 
    CommonModule,

  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '1231231231232',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: 'linkedin.com/in/dev',
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.contatoService.obterContatoPorId(Number(id)).subscribe((contato: Contato) => {
      this.contato = contato;
    });
  }

  public excluirContato() {
    const contatoId: any = this.contato.id;
    this.contatoService.excluirContato(contatoId).subscribe(() => {
      this.router.navigate(['/lista']); //redireciona para a página de contatos
    });
  }

  public voltar() {
    this.router.navigate(['/lista']); //redireciona para a página de contatos
  }
}
