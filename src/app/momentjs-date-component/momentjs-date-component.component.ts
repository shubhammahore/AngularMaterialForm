import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-momentjs-date-component',
  templateUrl: './momentjs-date-component.component.html',
  styleUrls: ['./momentjs-date-component.component.css']
})
export class MomentjsDateComponentComponent implements OnInit {

  constructor() {
    let now = moment();
    console.log('hello world', now.format()); 
    console.log(now.add(7, 'days').format());
   }

  ngOnInit() {
  }

}
