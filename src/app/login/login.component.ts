import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  ngOnInit() {
  }


   constructor(public authService: AuthService,private router:Router) {}

	 

	  onSubmit(value) {
	    
	    this.authService.login(value.email, value.password);
	      
	  }

	 
}
