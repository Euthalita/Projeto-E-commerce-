import { Component } from '@angular/core';
import { VitrineComponent } from "../vitrine/vitrine.component";
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-vitrine-incenso',
  standalone: true,
  imports: [VitrineComponent, RouterLink, CommonModule, MenuComponent],
  templateUrl: './vitrine-incenso.component.html',
  styleUrl: './vitrine-incenso.component.css'
})

export class VitrineIncensoComponent {
  public mensagem: string = "Incensos naturais";
  public lista: Produto[] = [
    {codigo:1, nome:"Incenso de camomila", descritivo:"Incenso de camomila para relaxamento e alivio do estresse",
      valor:9.99, quantidade:10, keywords:"ferramentas manuais",detalhe: "bla bla bla"},
    {codigo:2, nome:"Incenso de alecrim", descritivo:"Incenso natural para rituais e relaxamento",
    valor:12.99, quantidade:10, keywords:"ferramentas manuais",detalhe: "bla bla bla"},
    {codigo:3, nome:"Incenso flôr de laranjeira", descritivo:"Poderoso calmante, proporciona a sensação de alegria e relaxamento.",
    valor:14.99, quantidade:10, keywords:"ferramentas manuais",detalhe: "bla bla bla"},
    {codigo:4, nome:"Incendo Manga Rosa", descritivo:"Equilibra as emoções, limpa o ambiente e aumenta o bom senso",
    valor:14.99, quantidade:2, keywords:"ferramentas manuais",detalhe: "bla bla bla"} ,
    {codigo:5, nome:"Incenso Lavanda", descritivo:"Atrair boa sorte, proteção e crescimento psíquico",
      valor:19.99, quantidade:10, keywords:".",detalhe: "bla bla bla"}
  ];

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }
}

