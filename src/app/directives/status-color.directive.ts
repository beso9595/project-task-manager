import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {Status} from "../enums/status";

@Directive({
  selector: '[appStatusColor]',
  standalone: true
})
export class StatusColorDirective implements OnChanges {

  @Input() appStatusColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appStatusColor']) {
      const color = {
        [Status.TODO]: 'lightblue',
        [Status.IN_PROGRESS]: 'orange',
        [Status.WAITING_FOR_TEST]: 'yellow',
        [Status.IN_QA]: 'chocolate',
        [Status.DONE]: 'lightgreen',
        [Status.BACKLOG]: 'lightgrey',
      }[this.appStatusColor];
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
  }

}
