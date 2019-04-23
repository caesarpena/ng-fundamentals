import { Component, Input, /*Output, EventEmitter*/ } from '@angular/core'
import { IEvent } from './shared/index'
@Component({
    selector: 'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>

        <!--if the expression returns true then add the green class to this div -->
        <!--<div [class.green]="event?.time === '8:00 am'">Time: {{event?.time}}-->

        <!--same thing that the above statement but now I can add more than one class -->
        <!--<div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time ==='8:00 am'}" 
            [ngSwitch="event?.time"]>Time: {{event?.time}}-->

        <!-- same thing that the above statement but using a function -->
        <!--<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time"> Time: {{event?.time}}-->

        <!-- shows a different span element based on the time -->
        <!-- switch state using time as parameter -->
        <!--<div [ngSwitch]="event?.time">Time: {{event?.time}}-->
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time"> Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <!--comments out dom if param is null -->
        <!--<div *ngIf="event?.onlineUrl">Online Url: {{event?.onlineUrl}}</div>-->
        <!--hiddes dom if param is null -->
        <div [hidden]="!event?.onlineUrl">Online Url: {{event?.onlineUrl}}</div>
        <!--<button class="btn btn-primary" (click)="handleClickMe()">Click Me! </button>-->
    </div>
    `,
    styles: [`
        .green { color: #5cb85c !important; }
        .red { color: #d9534f !important; }
        .yellow { color: #f0ad4e !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 10px; }
        .well div { color: bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent
    //@Output() eventClick = new EventEmitter()

    handleClickMe(){
        //this.eventClick.emit('foo')
    }

    logFoo(){
        console.log('foo')
    }

    getStartTimeClass() {
        let n_class = 'yellow bold'
        if (this.event && this.event.time === '8:00 am')
            n_class = 'green bold'
        if (this.event && this.event.time === '10:00 am')
            n_class = 'red bold'
   
        return n_class
    }
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' }
        return {}
    }
}