import { Component, OnInit } from '@angular/core';
import {CookieService } from 'ngx-cookie';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService,private router:Router,private cookie : CookieService) { }

  ngOnInit() {
  }

}
