import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string = "";
  @Input() telefone: string = "";

  public editarContato() {
    console.log("Editar contato: " + this.nome);
  }

  public deletarContato() {
    console.log("Excluir contato: " + this.nome);
  }
}
