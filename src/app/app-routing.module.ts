import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/authGuard';
import { ContratosComponent } from './modules/contratos/contratos.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { MeusDadosComponent } from './modules/meus-dados/meus-dados.component';
import { NovaSolicitacaoComponent } from './modules/nova-solicitacao/nova-solicitacao.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', pathMatch: "prefix" , component: DashboardComponent },
      { path: 'contratos', component: ContratosComponent },
      { path: 'novasolicitacao', component: NovaSolicitacaoComponent },
      { path: 'meusdados', component: MeusDadosComponent },
    ]
  },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
