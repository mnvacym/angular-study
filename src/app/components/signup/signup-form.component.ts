import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  // reactive forms & nested groups & validators
  form = new FormGroup({
    account: new FormGroup({ 
      username: new FormControl(
        '',
        [Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace],
        // async validators are third argument
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  get username() {
    return this.form.get('account.username');
  }

  // setting custom error on submit
  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }
}
