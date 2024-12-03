import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { MenuComponent } from "../menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { BuscaComponent } from "../busca/busca.component";
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, MenuComponent, RouterOutlet, BuscaComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  public mensagem: string = "Conheça as nossas promoções";
  public lista: Produto[] = [];

  constructor(private service:ProdutoService){
    this.carregarLista();
  }
  carregarLista(){
    this.service.vitrine().subscribe({
      next:(data)=>{
        this.lista = data;
        if(this.lista.length<=0) this.mensagem = "Não existe produtos!!!!";
      },
      error:(msg)=>{this.mensagem = "Ocorreu erro tente mais tarde!!!!"}
    });
  }

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }

}
  