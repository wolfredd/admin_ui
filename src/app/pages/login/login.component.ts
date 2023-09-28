import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuthService } from 'src/app/services/auth.service';

import Pages from 'src/app/utilities/pages';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  sign_in_diplay: string = './assets/images/sign_in_diplay.jpg';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar ) { }

  loginForm: FormGroup = this.formBuilder.nonNullable.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  login() {
    console.log("Fire Login...")
    const details: { email: String, password: String } = this.loginForm.value;

    this.authService.authenticate(details).subscribe((response) => {
      localStorage.setItem("token", response.data.token)
      console.log(localStorage.getItem("token"))
      this._snackBar.open('Login Successfully', '', {duration:2000});
      this.router.navigate([Pages.client])
    });    
  }

}

