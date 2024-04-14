import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swat from 'sweetalert2';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  userForm = this.formBuilder.group({
    name: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    email: ['', [
      Validators.required, 
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]],
    password: ['', [Validators.required, this.passwordLengthValidator]],
  });

  get nameControl() {
    return this.userForm.get('name');
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    if (this.userForm.invalid) {
      Swat.fire({
        icon: 'error',
        title: 'Falta información',
        text: 'Por favor complete todos los campos del formulario',
      });
      return;
    }

    Swat.fire({
      icon: 'success',
      title: 'Realizado',
      text: 'Usuario registrado',
    });
  }

  passwordLengthValidator(control: import("@angular/forms").AbstractControl): { [key: string]: any } | null {
    if (control.value && control.value.length < 6) {
      return { 'passwordLengthError': true };
    }
    return null;
  }
}



