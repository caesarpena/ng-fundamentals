import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapse-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
          <ng-content selector="[well-title]"></ng-content>
        </h4>
        <ng-content selector="[well-content]" *ngIf="visible"></ng-content>
    </div>
  `
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible: boolean = true;

  toggleContent() {
        this.visible = !this.visible;
  }
}
