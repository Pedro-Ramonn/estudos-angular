import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {
  @Input() nome: string = ''
  @Input() telefone: string = ''
}