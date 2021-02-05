import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidationService } from '../../../shared/utils/password-validation.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit{

  passwordForm: FormGroup | undefined;
  submitted = false;
  requiredMessage: string;
  invalidPasswordMessage: string;
  requiredConfirmMessage: string;
  invalidMismatchMessage: string;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private passwordValidator: PasswordValidationService
  ) {
    this.requiredMessage = passwordValidator.requiredMessage;
    this.invalidPasswordMessage = passwordValidator.invalidPasswordMessage;
    this.requiredConfirmMessage = passwordValidator.requiredConfirmMessage;
    this.invalidMismatchMessage = passwordValidator.invalidMismatchMessage;
  }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', Validators.compose([
        Validators.required,
        this.passwordValidator.patternValidator()
      ])],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.passwordValidator.matchPassword('password', 'confirmPassword'),
    }
    );
  }

  get passwordFormControl(): any {
    return this.passwordForm.controls;
  }

  savePassword(): void {
    this.submitted = true;
  }

  cancel(): void {
    this.location.back();
  }

}
