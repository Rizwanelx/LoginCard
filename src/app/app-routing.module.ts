import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo : '/Login', pathMatch: 'full'},
  { path: 'header', component: HeaderComponent  },
  { path: 'Login', component: LoginFormComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
