import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MenuComponent, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public mensagem: String = "";
  public obj : Cliente = new Cliente();
  public fazerLogin(){
    if(this.obj.email=='norton.glaser@fatec.sp.gov.br' &&
        this.obj.senha=='123456'){
          localStorage.setItem("cliente", JSON.stringify(this.obj));
          window.location.href="./cliente";
    } else {
      this.mensagem = "Email ou senha ivalidos !!!";
      localStorage.removeItem("cliente");
    }  
  }
  public novoCadastro(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    window.location.href="./cliente";
  }
}