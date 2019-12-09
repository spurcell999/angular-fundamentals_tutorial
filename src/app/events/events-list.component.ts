import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h2>Upcoming Angular Events</h2>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail  *ngFor="let event of events" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})

export class EventsListComponent {
  events:any[]
  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }
}
