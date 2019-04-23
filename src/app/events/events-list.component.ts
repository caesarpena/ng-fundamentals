import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

declare let toastr

@Component({
    // selector: 'events-list',
    template:`
    <div>
        <h1>Upcoming Agular Events</h1> 
        <hr/>
        <!--<event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)"
            [event]="event1"></event-thumbnail>-->
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)"  [event]="event"></event-thumbnail>
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo</button>
    </div>
    `
})

export class EventsListComponent implements OnInit{
    events:IEvent[]
    constructor(private eventService: EventService, 
        private toastr: ToastrService,
        private route:ActivatedRoute) {
    }
    ngOnInit() {
        //this.events = this.eventService.getEvents()
        //without resolver
        //this.eventService.getEvents().subscribe(events => {this.events = events});
        //with resolver. The resolver forces the page to load only after the component receives data.
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }

    handleEventClicked(data){
        console.log(data)
    }
}