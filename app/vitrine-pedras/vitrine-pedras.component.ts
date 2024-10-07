import { Component } from '@angular/core';
import { VitrineComponent } from "../vitrine/vitrine.component";
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vitrine-pedras',
  standalone: true,
  imports: [VitrineComponent, RouterLink, CommonModule, MenuComponent],
  templateUrl: './vitrine-pedras.component.html',
  styleUrl: './vitrine-pedras.component.css'
})

export class VitrinePedrasComponent {
  public mensagem: string = "Pedras misticas naturais";
  public lista: Produto[] = [
    {codigo:6, nome:"Onix", descritivo:"Pedra onix para proteção, equlibrio emocional, força e coragem ",
      valor:14.99, quantidade:10, keywords:"", detalhe: "A pedra ônix é uma variedade de quartzo, conhecida por suas camadas distintas de cores, que vão do preto ao branco, passando por tons de marrom e cinza. Essa pedra é valorizada não apenas por sua beleza, mas também por suas propriedades espirituais e curativas."},
    {codigo:7, nome:"Olho de tigre", descritivo:"Pedra olho de tigre para prosperidade, foco e determinação",
    valor:24.99, quantidade:10, keywords:"", detalhe: "bla bla bla"},
    {codigo:8, nome:"Cristal", descritivo:"Os cristais na cor branca ou transparente são o símbolo de pureza e limpeza.",
    valor:14.99, quantidade:10, keywords:"", detalhe: "bla bla bla"},
    {codigo:9, nome:"Ametista", descritivo:"A Ametista é considerada a pedra da sabedoria e equilíbrio, ligada à proteção, vitalidade e elevação espiritual",
    valor:23.99, quantidade:2, keywords:"", detalhe: "bla bla bla"},
    {codigo:10, nome:"Quartzo Rosa", descritivo:"O Cristal Quartzo Rosa facilita a entrada do amor em nossas vidas, sobretudo por nós mesmas. ",
      valor:29.99, quantidade:10, keywords:"", detalhe: "bla bla bla"}
  ];

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }
}