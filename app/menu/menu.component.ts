import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink ]
})

export class MenuComponent{
  isMenuOpen = false; // Inicializa o estado do menu como fechado

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }
}