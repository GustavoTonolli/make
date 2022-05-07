import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: "root" })
export class CookieGeralService {
    constructor(private cookieService: CookieService) { }

    public ObterCookie(nomeCookie: string): string {
        return this.cookieService.get(nomeCookie);
    }

    public DeletarCookie(nomeCookie: string): void {
        return this.cookieService.delete(nomeCookie);
    }

    public DefinirCookie(nomeCookie: string, dadoCookie: string, tempoExpiracao?: number): void {
        if (tempoExpiracao)
            return this.cookieService.set(nomeCookie, dadoCookie, tempoExpiracao);
        else
            return this.cookieService.set(nomeCookie, dadoCookie);
    }

    public VerificarCookie(nomeCookie: string): boolean {
        return this.cookieService.check(nomeCookie);
    }
}