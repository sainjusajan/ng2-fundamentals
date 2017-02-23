import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
}from './events/index'
import {TOASTR_TOKEN, Toastr} from './events/shared/toastr.service'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from "./user/auth.service";
import {CreateSessionComponent} from "./events/create-session.component";
import {SessionListComponent} from "./events/session-list.component";
import {DurationPipe} from "./events/shared/duration.pipe";

declare let toastr:Toastr;

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {
      provide : 'TOASTR_TOKEN',
      useValue: toastr
    },

    EventListResolver,
    AuthService,
    EventRouteActivator
    // {
    //   provide: 'canDeactivateCreateEvent',
    //   useValue: 'checkDirtyState'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// function checkDirtyState(component: CreateEventComponent, window:any){
//   if (component.isDirty) {
//     return window.confirm('alsdkfjalsdjflasjdlfk')
//   }
//   return true
// }
