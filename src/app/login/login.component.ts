import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  LoginForm = this.formBuilder.group({
    Email: [
      '',
      [
        Validators.required,
        Validators.email,
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@+.[a-zA-Z0-9-.]+$'),
      ],
    ],
    Password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  myHide() {
    this.hide = !this.hide;
  }

  submit() {
    if (
      this.LoginForm.controls.Email.value == 'user@user.com' &&
      this.LoginForm.controls.Password.value == 'user@123'
    ) {
      this.router.navigate(['/order']);
    }
  }
}
