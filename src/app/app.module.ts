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
// import {TOASTR_TOKEN } from './events/shared/toastr.service'
import { JQ_TOKEN } from './common/jQuery.service'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from "./user/auth.service";
import {CreateSessionComponent} from "./events/create-session.component";
import {SessionListComponent} from "./events/session-list.component";
import {DurationPipe} from "./events/shared/duration.pipe";
import {
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common/index";
import {UpvoteComponent} from "./events/upvote.component";
import {VoterService} from "./events/voter.service";
import {LocationValidator} from "./events/create-event/location-validator.directive";


// declare let toastr : any ;
declare let jQuery : any ;

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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
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
    // { provide : 'TOASTR_TOKEN', useValue: toastr },
    { provide : 'JQ_TOKEN', useValue: jQuery },
    EventListResolver,
    AuthService,
    EventRouteActivator,
    VoterService
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
