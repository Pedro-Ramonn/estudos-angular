import { Injectable } from '@angular/core';
import { Contato } from '../paginas/lista-contatos/lista-contatos.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private API = 'http://localhost:3000/contatos';

  constructor(
    private http: HttpClient,
  ) {}

   ngOnInit() { 
   }

   public obterContatos(): Observable<Contato[]> {
     return this.http.get<Contato[]>(this.API)
   }

   public SalvarContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.API, contato)
   }

   public obterContatoPorId(id: number): Observable<Contato> {
     return this.http.get<Contato>(`${this.API}/${id}`)
   }

   public excluirContato(id: number): Observable<void> {
     return this.http.delete<void>(`${this.API}/${id}`)
   }

   public editarContato(id: number, contato: Contato): Observable<Contato> {
     return this.http.put<Contato>(`${this.API}/${contato.id}`, contato) // Atualiza o contato com o id especificado
   }

   public editarOuSalvarContato(contato: Contato): Observable<Contato> {
     if (contato.id) {
       return this.editarContato(contato.id, contato);
     } else {
       return this.SalvarContato(contato);
     }}

}
