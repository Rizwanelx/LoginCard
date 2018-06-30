import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
isAdmin: boolean;
  isPublic: boolean;
  isAdminSignUp: boolean;
  isPublicSignUp: boolean;
  constructor() { }

  ngOnInit() {
  }
onAdmin() {
    this.isAdmin = true;
  this.isPublic = false;
  this.isAdminSignUp = false;
  this.isPublicSignUp = false;
}
onPublic() {
    this.isPublic = true;
  this.isAdmin = false;
  this.isAdminSignUp = false;
  this.isPublicSignUp = false;
}
  onAdminSignUp() {
    this.isAdminSignUp = true;
    this.isPublicSignUp = false;
    this.isAdmin = false;
    this.isPublic = false;
  }
  onPublicSignUp() {
    this.isPublicSignUp = true;
    this.isAdminSignUp = false;
    this.isAdmin = false;
    this.isPublic = false;
  }
}
