import { Component } from '@angular/core';
import { LoginService }  from '../login.service';
import { TokenService }  from '../token.service';
import { LoginFormulario } from '../login';
import { TokenFormulario } from '../token';
import { Router } from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: 'app/components/login.component.html',
})

export class LoginComponent {

  constructor(private loginService: LoginService,
              private tokenService: TokenService,
              private router: Router,) { }

  formulario = new LoginFormulario('', '', '');
  formularioToken = new TokenFormulario('');
  respuesta = null

  guardarToken(data: string): void {
    this.tokenService.guardarToken(data)
  }

  loguear(): void {
    this.respuesta = this.loginService.loguear(this.diagnostic).then(data => this.guardarToken(data))
    this.formulario = this.respuesta
    //this.router.navigate(['/dashboard']);
    //If success, then go to home
  }

  mostrarToken(): void{
    console.log(this.tokenService.pedirToken())
  }

  get diagnostic() { return JSON.stringify(this.formulario); }
}
