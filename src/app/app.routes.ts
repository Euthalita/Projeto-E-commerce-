import { Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BuscaComponent } from './busca/busca.component';
import { LoginComponent } from './login/login.component';
import { CestaComponent } from './cesta/cesta.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { VitrinePedrasComponent } from './vitrine-pedras/vitrine-pedras.component';
import { VitrineIncensoComponent } from './vitrine-incenso/vitrine-incenso.component';
import { VitrineTarotComponent } from './vitrine-tarot/vitrine-tarot.component';
import { VitrineChaComponent } from './vitrine-cha/vitrine-cha.component';
import { CLienteComponent } from './cliente/cliente.component';


export const routes: Routes = [
    {path:"cliente", component:CLienteComponent},
    {path:"vitrine", component:VitrineComponent},
    //{path: "", redirectTo: '/vitrine', pathMatch: 'full'},
    {path:"detalhe", component:DetalheComponent},
    {path:"login", component:LoginComponent},
    {path:"busca", component:BuscaComponent},
    {path:"cesta", component:CestaComponent},
    {path:"esqueci", component:EsqueciComponent},
    {path:"vitrine-pedras", component:VitrinePedrasComponent},
    {path: "vitrine-incenso", component: VitrineIncensoComponent}, 
    {path: "vitrine-tarot", component: VitrineTarotComponent},
    {path: "vitrine-cha", component: VitrineChaComponent}
    
];
