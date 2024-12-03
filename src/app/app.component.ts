import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { LoginComponent } from './login/login.component';
import { DetalheComponent } from "./detalhe/detalhe.component";
import { VitrineIncensoComponent } from "./vitrine-incenso/vitrine-incenso.component";
import { VitrinePedrasComponent } from './vitrine-pedras/vitrine-pedras.component';
import { VitrineTarotComponent } from "./vitrine-tarot/vitrine-tarot.component";
import { VitrineComponent } from "./vitrine/vitrine.component";
import { CLienteComponent } from './cliente/cliente.component';
import { VitrineChaComponent } from "./vitrine-cha/vitrine-cha.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, LoginComponent, DetalheComponent, CLienteComponent,
    VitrineIncensoComponent, VitrinePedrasComponent, VitrineTarotComponent, VitrineComponent, VitrineChaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'project-loja-p1';
}
