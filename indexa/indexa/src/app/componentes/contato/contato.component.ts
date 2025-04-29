import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string = "";
  @Input() telefone: string = "";
  @Input() id?: number;

  public editarContato() {
    console.log("Editar contato: " + this.nome);
  }

  public deletarContato() {
    console.log("Excluir contato: " + this.nome);
  }
}
