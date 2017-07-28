import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup , FormControl, Validators} from '@angular/forms';
	

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(public authService: AuthService) {}

  
  onSubmit(value) {
  	console.log(value);
    this.authService.signup(value.email, value.password);
    // this.email = this.password = '';
  }

  ngOnInit() {
  }

}
