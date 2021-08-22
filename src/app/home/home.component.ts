import { LogService } from './../log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Angular App';
  log: any;
  constructor() {


  }
  ngOnInit() {
    this.log = LogService.ActiveLogging().log;
    this.log(4444234);
    this.log = LogService.NoLogging().log;
    // this.logService.NoLogging();
    this.log(4444234);
  }


}
