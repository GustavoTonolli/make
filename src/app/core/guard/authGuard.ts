import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ManterConectadoService } from "../services/manterConectado.service";

@Injectable({ providedIn: "root" })

export class AuthGuard  {
    constructor(
        private router: Router,
        private manterConectadoService: ManterConectadoService
    ) { }

    usuarioLogado: boolean = true;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {    
        if (this.manterConectadoService.usuarioConectado() || this.usuarioLogado) {                      
            return true;
        }

        this.router.navigate(["/"]);
        return false;
    }
}
