import { Component } from '@angular/core';
import { CestaComponent } from '../cesta/cesta.component';
import { Cesta} from '../model/cesta';
import { Item } from '../model/item';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CestaComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  public mensagem: string = "";
  public cesta: Cesta = new Cesta();

  constructor(){
    let json = localStorage.getItem("cesta");
    if(json!=null){
      this.cesta = JSON.parse(json);
    } else {
      this.mensagem = "Cesta vazia, adicione novos itens!";  
    } 
  }


public removerItem(obj:Item){
  this.cesta.itens = this.cesta.itens.filter(item => item != obj);  
  this.cesta.total = 0; //ATUALIZA O VALOR TOTAL DA CESTA
  for(let i=0; i<this.cesta.itens.length; i++){
    this.cesta.total= this.cesta.itens[i].valor+this.cesta.total;
  }
console.log(this.cesta);
  localStorage.setItem("cesta", JSON.stringify(this.cesta));    
}

public limparCesta(){
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mensagem = "Cesta vazia, adicione novos itens!";  
}
    

}
