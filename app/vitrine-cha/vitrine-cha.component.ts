import { Component } from '@angular/core';
import { VitrineComponent } from '../vitrine/vitrine.component';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { MenuComponent } from "../menu/menu.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-vitrine-cha',
  standalone: true,
  imports: [VitrineComponent, RouterLink, CommonModule, MenuComponent],
  templateUrl: './vitrine-cha.component.html',
  styleUrl: './vitrine-cha.component.css'
})
export class VitrineChaComponent {
  public mensagem: string = "Chá natural";
  public lista: Produto[] = [
    {codigo:16, nome:"Chá de Canela", descritivo:"Chá de canela em paus",
      valor:14.99, quantidade:10, keywords:"" , detalhe: "O chá de canela é uma bebida aromática e reconfortante, conhecida por suas propriedades saborosas e benefícios à saúde. Feito a partir da infusão da casca da canela, este chá não só oferece um sabor doce e picante, mas também é rico em antioxidantes e compostos anti-inflamatórios."},
    {codigo:17, nome:"Chá de Hibisco", descritivo:"Chá flôr de hibisco",
    valor:9.99, quantidade:10, keywords:"" , detalhe: "Cardioprotetor, vasodilatador e regulador do colesterol graças aos flavonoides presentes no chá; Regula o intestino: o chá possui compostos com efeito estimulante sobre o intestino, facilitando a passagem e eliminação do bolo fecal; Tem ação termogênica."},
    {codigo:18, nome:"Chá Espinheira Santa", descritivo:"Ótimo para gastrite e dores estômacais",
    valor:14.99, quantidade:10, keywords:"", detalhe: "bla bla bla" },
    {codigo:19, nome:"Chá de Erva doce", descritivo:"Para melhorar a digestão, propriedades analgésicas e anti-inflamatórias",
    valor:14.99, quantidade:2, keywords:"", detalhe: "bla bla bla" } ,
    {codigo:20, nome:"Chá de Hortelã", descritivo:" O Chá de Hortelã é uma infusão natural com sabor refrescante",
      valor:14.99, quantidade:10, keywords:"", detalhe: "As de folhas da hortelã contêm óleos essenciais (mentol, mentona e limoneno), antioxidantes, ácido fólico, riboflavina e um alfabeto de vitaminas: A, B6, C, K e E"},
  ];

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }

}

