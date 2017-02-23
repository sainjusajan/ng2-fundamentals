import {Component, Input, Output, EventEmitter} from '@angular/core'
import {IEvent} from "./shared/event.model";

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
styles: [`
  .green{color:#3be13b;}
  .bold{font-weight: bold;}
`
]
})

export class EventThumbnailComponent{
  @Input() event:IEvent;
  getClassStartTime(){
    if(this.event && this.event.time==='8:00 am')
      return 'green bold'
    return ''
  }

}
