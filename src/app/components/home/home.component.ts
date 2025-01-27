import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Store} from "@ngrx/store";
import {login} from "../../store/login/login-page.actions";
import {CrudService} from "../../api/crud.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    ReactiveFormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    NgIf,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loginOrRegistration: 'login' | 'registration' = 'login';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
      private store: Store,
      private userCrudService: CrudService<User>,
  ) {
    // this.userCrudService.getAll('users').subscribe(v => console.log(v));
  }

  onLogin(): void {
    this.store.dispatch(login({
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    }));
  }

  onRegistration(): void {
    console.log('asd');
  }
}
