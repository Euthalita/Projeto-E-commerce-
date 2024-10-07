import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { MenuComponent } from "../menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { BuscaComponent } from "../busca/busca.component";

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, MenuComponent, RouterOutlet, BuscaComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  public mensagem: string = "Conheça as nossas promoções";
  public lista: Produto[] = [
    {codigo:7, nome:"Pedra olho de tigre", descritivo:"Pedra olho de tigre para prosperidade, foco e determinação",
      valor:14.99, quantidade:10, keywords:"pedra mistica", detalhe: "bla bla bla"},
    {codigo:2, nome:"Incenso de alecrim", descritivo:"Incenso natural para rituais e relaxamento",
    valor:12.99, quantidade:10, keywords:"incenso", detalhe: "bla bla bla"},
    {codigo:14, nome:"Tarot dos Magos", descritivo:"Domine sua Magia com este Deslumbrante Deck dos Magos",
    valor:89.90, quantidade:10, keywords:"", detalhe: "bla bla bla"},
    {codigo:1, nome:"Incenso Camomila", descritivo:"Incenso de camomila para relaxamento e alivio do estresse",
    valor:9.99, quantidade:0, keywords:"", detalhe: "bla bla bla"} ,
    {codigo:6, nome:"Pedra onix", descritivo:"Pedra onix para proteção, equlibrio emocional, força e coragem ",
      valor:9.99, quantidade:10, keywords:"", detalhe: "A pedra ônix é uma variedade de quartzo, conhecida por suas camadas distintas de cores, que vão do preto ao branco, passando por tons de marrom e cinza. Essa pedra é valorizada não apenas por sua beleza, mas também por suas propriedades espirituais e curativas."},
    {codigo:16, nome:"Chá de Canela", descritivo:"Chá de canela em paus",
      valor:14.99, quantidade:10, keywords:"" , detalhe: "O chá de canela é uma bebida aromática e reconfortante, conhecida por suas propriedades saborosas e benefícios à saúde. Feito a partir da infusão da casca da canela, este chá não só oferece um sabor doce e picante, mas também é rico em antioxidantes e compostos anti-inflamatórios."},
    {codigo:11, nome:"Tarot de Marseille", descritivo:"Tarot Tradicional",
      valor:149.90, quantidade:10, keywords:"", detalhe: "bla bla bla"},
    {codigo:17, nome:"Chá de Hibisco", descritivo:"Chá flôr de hibisco",
      valor: 9.99, quantidade:10, keywords:"" , detalhe: "Cardioprotetor, vasodilatador e regulador do colesterol graças aos flavonoides presentes no chá; Regula o intestino: o chá possui compostos com efeito estimulante sobre o intestino, facilitando a passagem e eliminação do bolo fecal; Tem ação termogênica."},
    {codigo:4, nome:"Incenso Manga Rosa", descritivo:"Equilibra as emoções e limpa o ambiente",
      valor:9.99, quantidade:2, keywords:"",detalhe: "bla bla bla"},
    {codigo:8, nome:"Cristal", descritivo:"Pedra Cristal",
      valor:14.99, quantidade:10, keywords:"ferramentas manuais", detalhe: "É capaz de afastar as energias negativas, atraindo tranquilidade e espiritualidade ao ambiente. "}
  ];

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }

}


  