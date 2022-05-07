import { Injectable } from "@angular/core";
import { LocalStorageService } from "./localStorage.service";

@Injectable({ providedIn: "root" })
export class ManterConectadoService {
    constructor(private localStorageService: LocalStorageService) { }

    nomeCookieLogado: string = "manterConectado";
    manterConectado: boolean = false;

    public usuarioConectado(): boolean {
        return this.localStorageService.ValidarStorage(this.nomeCookieLogado);
    }
}