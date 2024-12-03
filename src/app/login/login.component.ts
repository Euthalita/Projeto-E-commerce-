import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

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
  constructor(private service: ClienteService){}

  public fazerLogin(){
    this.service.fazerLogin(this.obj).subscribe({
        next:(data)=>{
          this.obj = data;
          if(this.obj.codigo!=0){
            localStorage.setItem("cliente", JSON.stringify(this.obj));
            window.location.href="./cesta";
          }
          else {
            this.mensagem = "Login ou senha invalidos!!!"
          }
        },
        error:(msg)=>{
          this.mensagem = "Ocorreu um erro tente novamente!"
        }
    });


    if(this.obj.email=='thalita.simao@fatec.sp.gov.br' &&
        this.obj.senha=='123456'){
          localStorage.setItem("cliente", JSON.stringify(this.obj));
          window.location.href="./cliente";
    } else {
      this.mensagem = "Email ou senha inválidos !!!";
      localStorage.removeItem("cliente");
    }  
  }
  public novoCadastro(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    window.location.href="./cliente";
  }
}
