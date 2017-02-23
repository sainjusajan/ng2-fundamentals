import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventService} from "../shared/event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  // isDirty:boolean = false
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues)

    // this.isDirty = false
    this.router.navigate(['/events'])
    // console.log(formValues)
  }
  cancel(){
    this.router.navigate(['/events'])
  }
}