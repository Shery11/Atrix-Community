import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CookieModule } from 'ngx-cookie';



// components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventComponent } from './event/event.component';
import { StartupComponent } from './startup/startup.component';
import { AboutComponent } from './about/about.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// services
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './user.service';

export const firebaseConfig = {
   
    apiKey: "AIzaSyBXQtMJ62d4kgWrgvEmpnEdvxccu3dWqJo",
    authDomain: "atrix-community.firebaseapp.com",
    databaseURL: "https://atrix-community.firebaseio.com",
    projectId: "atrix-community",
    storageBucket: "",
}


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    LandingComponent,
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    EventComponent,
    StartupComponent,
    AboutComponent,
    DashboardHeaderComponent,
    LoginComponent,
    RegisterComponent,
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CookieModule.forRoot(),
    RouterModule.forRoot([
       {
          path:'',
          redirectTo:'landing',
          pathMatch: 'full'
       },
       {
         path:'landing',
         component: LandingComponent
       },
       {
           path : 'dashboard',
           component: DashboardComponent,
           children : [

            {
                path:'',
                redirectTo:'home',
                pathMatch: 'full'
            },
            {
               path: 'home',
               component : HomeComponent    
            },           
            {
              path : 'profile',
              component : ProfileComponent
            },
            {
              path: 'events',
              component: EventComponent
            },
            {
              path : 'startups',
              component : StartupComponent
            },
            {
              path: 'about',
              component : AboutComponent
            }
           ]
       },
        {
          path : 'login',
          component : LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
       { path: '**', 
         component: PageNotFoundComponent 
       }
    ])

  ],
  providers: [AuthService,AngularFireAuth,AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
