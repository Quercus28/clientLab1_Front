import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error_message = "Usuario o contraseña incorrecta";
  button_snackBar = "Cerrar"

  //Solo para pruebas
  correct_username = "Quercus";
  correct_password = "1234";

  constructor(private recaptchaV3Service: ReCaptchaV3Service, private loginService: LoginService,private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) {
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
    this.ingresar();
  }

  ingresar() {
    /*
    this.loginService.login(this.username, this.password).subscribe({
      next: data => {
        this.router.navigate(['formulario']);
      },
      error: err => {
        this.openSnackBar(this.error_message, this.button_snackBar);
      }
    });*/

    if(this.correct_password == this.password && this.correct_username == this.correct_username){
      console.log("Bienvenido");
      this.router.navigate(['formulario']);
    }
    else{
      console.log("Mal");
      this.openSnackBar(this.error_message, this.button_snackBar);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }  

  onSubmit() {
    this.http.post('/api/login', { username: this.username, password: this.password }).subscribe((response) => {
      console.log(response);
    });
  }

}
