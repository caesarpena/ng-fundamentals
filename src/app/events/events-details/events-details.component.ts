import { Component } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index'

@Component({
    templateUrl: './events-details.component.html',
    styles: [`
        .container { padding-left"20px; padding-right:20px; }
        .event-image { height: 100px; }
        a {cursor:pointer;}
    `]
})

export class EventDetailsComponent {

    event: IEvent;
    addMode:boolean

    constructor(private eventService:EventService, 
                private route:ActivatedRoute){
                }

    ngOnInit(){
        let id: number = this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(+id);
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session:ISession){
        //iterating on the sessions id array to find the bigger id
        const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }
}