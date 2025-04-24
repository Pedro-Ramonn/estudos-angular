import { Injectable } from '@angular/core';
import { Contato } from '../paginas/lista-contatos/lista-contatos.component';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 14, "nome": "Giovana", "telefone": "82 836752948"},
    {"id": 15, "nome": "Henrique", "telefone": "16 326607223"},
    {"id": 16, "nome": "Helena", "telefone": "58 696978253"},
    {"id": 17, "nome": "Igor", "telefone": "46 316441802"},
    {"id": 18, "nome": "Isabela", "telefone": "81 103125769"},
  ];

  constructor() {}

   ngOnInit() { 
    const contatosString = localStorage.getItem('contatos');
    const contatos = contatosString ? JSON.parse(contatosString) : null;
    this.contatos = contatos || null;
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
   }

   public obterContatos(): Contato[] {
    return this.contatos;
   }

   public SalvarContato(contato: Contato): void {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
   }

}
