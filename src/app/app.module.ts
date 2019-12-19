import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'
import { NavBarComponent } from './nav/navbar.component'
import { EventsAppComponent } from './events-app.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes} from './routes'
import { RouterModule } from '@angular/router'
import { Error404Component } from './errors/404.component'


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventListResolver, EventRouteActivator, { provide:'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved this, do you want to cancel?');

  return true
}
