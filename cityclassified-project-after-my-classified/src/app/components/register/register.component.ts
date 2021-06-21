import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernames: string[] = [];

  registerForm: FormGroup = new FormGroup({
    'userName': new FormControl('', [Validators.required, Validators.pattern('^((?!\\s).)*$')], this.userNameValidator.bind(this)),
    'firstname': new FormControl('', [Validators.required, Validators.pattern('^((?!\\s).)*$')]),
    'lastname': new FormControl('', [Validators.required, Validators.pattern('^((?!\\s).)*$')]),
    'password': new FormControl('', Validators.required),
    'dateOfBirth': new FormControl('', Validators.required),
    'phoneNumber': new FormControl('', Validators.required),
    'city': new FormControl('', Validators.required)
  });

  constructor(private service: RegisterService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getUserNames().subscribe(response => {
      this.usernames = response as string[];
    }, error => {
      console.log(error);
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.service.addUser(this.registerForm.value)
      .subscribe(response => {
        console.log("Success");
        this.router.navigateByUrl('/user-login');
      }, error => {
        console.log("Error Occured");
      })
  }

  toggle() {
    let x: any = document.getElementById("password");
    if (x!.type === "password") {
      x!.type = "text";
      document!.getElementById('eye')!.style.color = "red";
    } else {
      x!.type = "password";
      document!.getElementById('eye')!.style.color = "black";
    }
  }

  userNameValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      let userName = control.value;

      console.log(this.usernames)
      if (this.usernames.indexOf(userName) >= 0) {
        resolve({ "invalid": true })
      } else {
        resolve(null)
      }

    })
  }

}
