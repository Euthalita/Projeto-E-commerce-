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
    
  ];

  public verDetalhe(item:Produto){
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href = "./detalhe";  
  }

}

