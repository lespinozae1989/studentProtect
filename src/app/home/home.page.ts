import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [];
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  viewTitle = '';

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private MenuCtrl: MenuController) {}

  ngOnInit(){
    this.resetEvent();
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  addEvent(){
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    
  
    if (eventCopy.allDay)
    {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    console.log(eventCopy.startTime);
    console.log(eventCopy.endTime);

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
    
  }

  toggleMenu(){
    this.MenuCtrl.toggle();
  }

  onEventSelected(){

  }

  onViewTitleChanged(){

  }

  onTimeSelected(){

  }
}
