import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers: [

  ],
})
export class UserModule { }

