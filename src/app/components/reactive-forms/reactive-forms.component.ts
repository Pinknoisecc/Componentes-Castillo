import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noHomeroValidator } from '../../utils/custom.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  userFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      terms: [false, Validators.requiredTrue],
      name: ['', [Validators.required, noHomeroValidator]]
    });
  }

  onSubmit() {
    if (this.userFormGroup.valid) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form is invalid');
    }
  }
}
