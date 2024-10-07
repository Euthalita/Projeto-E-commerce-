import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vitrine-tarot',
  standalone: true,
  imports: [RouterLink, CommonModule, MenuComponent],
  templateUrl: './vitrine-tarot.component.html',
  styleUrl: './vitrine-tarot.component.css'
})
export class VitrineTarotComponent {
    public mensagem: string = "Decks para sua escolha!";
    public lista: Produto[] = [
      {codigo:11, nome:"Tarot de Marseille", descritivo:"Tarot Tradicional",
        valor:149.90, quantidade:10, keywords:"", detalhe: "bla bla bla"},
      {codigo:12, nome:"Tarot De Rider Wait", descritivo:"O Tarot Rider-Waite é um dos baralhos mais utilizados em todo o mundo.",
      valor:199.99, quantidade:10, keywords:"", detalhe: "bla bla bla"},
      {codigo:13, nome:"Tarot das Bruxas", descritivo:"Tarot tradicional e original",
      valor:169.90, quantidade:10, keywords:"", detalhe: "Esse deck, traz uma singela homenagem a todas as egrégoras das BRUXAS, WICCA e afins, buscando em cada carta, em cada lâmina, trazer de forma mais expressa e explícita, elementos para auxiliar nos estudos, atendimentos e consultas. Esse deck exclusivo traz a você, 36 cartas plastificadas na frente e verso ,envernizado para facilitar o embaralhamento das cartas. Ilustrações modernas com uma gama de detalhes misteriosos para elevar seu estudo e seu jogo profissional. Indicado para INICIANTES E PROFISSIONAIS"},
      {codigo:14, nome:"Tarot dos Magos", descritivo:"Domine sua Magia com este Deslumbrante Deck dos Magos",
      valor:89.90, quantidade:3, keywords:"", detalhe: "Levante sua espada, acione a sua varinha e desenhe seu pentáculo com este deck irresistível, com arestas de arbustos e um guia colorido. Cada lâmina ganha vida com tons vibrantes e exibições explosivas de magia de tirar o fôlego. Os praticantes de muitos caminhos podem melhorar suas habilidades usando a brilhante sabedoria da especialista em tarô Barbara Moore e ilustrações magníficas de Mieke Janssens. Cheio de incríveis mistérios e lançadores de feitiços, este baralho o encantará definitivamente."} ,
      {codigo:15, nome:"Tarot Videntes da Luz", descritivo:"o Tarô do Light Seer expressa os lados de luz e sombra de nossas naturezas e explora as lições que podem ser aprendidas com ambos.",
        valor:129.49, quantidade:10, keywords:"", detalhe: "bla bla bla"}
    ];
  
    public verDetalhe(item:Produto){
      localStorage.setItem("produto", JSON.stringify(item));
      window.location.href = "./detalhe";  
    }
  
}
  
  
    

