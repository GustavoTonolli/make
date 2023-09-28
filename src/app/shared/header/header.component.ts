import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/core/services/localStorage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    constructor(
        private localStorageService: LocalStorageService,
        private router: Router) { }

    ngOnInit(): void { }

    expansiveMenu: boolean = false;  

    expandirMenu(expansive: boolean) {      
        this.expansiveMenu = !this.expansiveMenu;
    };

    imageUserIconPath: string = "./assets/imagens/icone-usuario.jpg";
    nomeUsuario: string = "Kelly";
    imageExitIconPath: string = "./assets/imagens/exit-icon.png";

    logout(): void{
        this.localStorageService.ExcluirStorage("manterConectado");
        this.router.navigate(["/"]);
    }

}



