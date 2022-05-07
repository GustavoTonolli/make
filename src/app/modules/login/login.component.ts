import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';
import { ManterConectadoService } from 'src/app/core/services/manterConectado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private manterConectadoService: ManterConectadoService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usuarioConectado();
  }

  exibeEsqueciSenha: boolean = false;

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
    chkManterConectado: true
  })

  msgLogin: string = "";

  esqueciSenha(): boolean {
    return this.exibeEsqueciSenha = true;
  }

  manterConectado(event: any): void {
    if (event.target.checked)
      this.criarStorageManterConectado();
    else
      this.excluirStorageManterConectado();
  }

  usuarioConectado(): void {
    if (this.manterConectadoService.usuarioConectado())
      this.router.navigate(["/home"]);
  }

  login(): void {
    if (this.loginForm.value.chkManterConectado)
      this.criarStorageManterConectado();

    if (!this.authService.validarUsuario(this.loginForm.value.email, this.loginForm.value.password))
      this.msgLogin = "Usuario ou senha errados!";
    else {
      this.router.navigate(["/home"]);
    }
  }

  criarStorageManterConectado(): void {
    this.localStorageService.CriarStorage("manterConectado", "S");
  }

  excluirStorageManterConectado(): void {
    this.localStorageService.ExcluirStorage("manterConectado");
  }

  
}
