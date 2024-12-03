import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Cesta } from '../model/cesta';
import { BuscaComponent } from '../busca/busca.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink , BuscaComponent]
})

export class MenuComponent{
  isMenuOpen = true; // Inicializa o estado do menu como fechado

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }

 

  
}