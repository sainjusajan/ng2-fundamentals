
import { Routes} from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-route-activator.service'
import { EventListResolver } from './events/event-list-resolver.service'
import { CreateSessionComponent } from './events/create-session.component'

export const appRoutes: Routes = [
	{ path: 'events/new', component: CreateEventComponent },
	{ path: 'events/session/new', component: CreateSessionComponent },
	{ path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
	{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
	{ path: '404', component: Error404Component },
	{ path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
]
