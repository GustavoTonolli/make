import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
  
export class MenuComponent implements OnInit {

  ngOnInit(): void { 
    this.carregarItensMenu();
  }

  itensMenu: MenuItem[] = [];

  carregarItensMenu(): MenuItem[] {
    this.itensMenu = [

      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-pencil',
        routerLink: './dashboard',        
      },
      {
        label: 'Operações',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Contratos',
            routerLink: './contratos',
          },
          {
            label: 'Nova solicitação',
            routerLink: './novasolicitacao'
          },
          {
            label: 'Meus cartões',
            routerLink: './meuscartoes'
          }
        ]
      },
      {
        label: 'Integrações',
        icon: 'pi pi-fw pi-calendar',
        routerLink: './integracoes'
      },
      {
        label: 'Minha conta',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Alterar senha',
            routerLink: './alterarsenha'
          },
          {
            label: 'Meus dados',
            routerLink: './meusdados'
          }
        ]
      }
    ];
    return this.itensMenu;
  }
}