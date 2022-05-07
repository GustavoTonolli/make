import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
    constructor() { }

    listaUsuarios: any;

    nomeCookieLogado: string = "manterConectado";

    public validarUsuario(email: string, senha: string): boolean {
        this.listaUsuarios = this.listarUsuarios();
        const arr = this.listaUsuarios.filter((e: any) => e.email.toLowerCase() == email.toLowerCase()
            && e.senha.toLowerCase() == senha.toLowerCase());
        if (arr.length > 0)
            return true
        else
            return false;
    }

    public listarUsuarios(): any {
        return [
            {
                email: "teste@teste.com.br",
                senha: "123456"
            },
            {
                email: "kelly@divibank.co",
                senha: "123456"
            }
        ]
    }
}