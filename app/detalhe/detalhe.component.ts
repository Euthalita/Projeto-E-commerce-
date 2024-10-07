import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})

export class DetalheComponent {
  public mensagem: String = "";
  public item: Produto = new Produto();

  constructor(){
    let json = localStorage.getItem("produto");
    if(json!=null){
      this.item = JSON.parse(json);  
    } else {
      this.mensagem = "Produto não encontrado !";
    }  
  }

  
}
