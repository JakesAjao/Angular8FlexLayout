import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { BrowserModule } from '@angular/platform-browser';
//import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers/auth.guard'
const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
    //{ path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    //{ path: '**', redirectTo: 'dashboard' }
];

export const appRoutingModule = RouterModule.forRoot(routes);