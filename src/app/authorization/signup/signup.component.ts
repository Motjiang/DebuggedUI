import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/models/status';
import { validPattern } from 'src/app/Helpers/pattern-match.validators';
import { MustMatch } from 'src/app/Helpers/must-match.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private signupService: SignupService, private fb: FormBuilder) {}

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait..' };
    this.signupService.signup(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.status = res;
        this.frm.reset();
      },
      error: (err) => {
        this.status.statusCode = 0;
        this.status.message = 'some error on server side';
        console.log(err);
      },
      complete: () => {},
    });
  }

  ngOnInit(): void {
    const patternRegex = new RegExp(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$'
    );
    // must be atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    this.frm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, validPattern(patternRegex)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
}
