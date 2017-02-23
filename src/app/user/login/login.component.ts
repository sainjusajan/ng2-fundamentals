import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import {IEvent} from "../../events/shared/event.model";
@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  hellocheck(formvalues){
    console.log(formvalues)
  }
  cancel(){
    this.router.navigate(['events'])
  }
}
