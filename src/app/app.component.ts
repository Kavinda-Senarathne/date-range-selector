import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentdate = new Date();
  startDate;
  monthToDate() {
   this.startDate = moment().format('YYYY-MM-01');
   return this.startDate;
  }
  quarterToDate() {
    this.startDate = moment().startOf('quarter').format('YYYY-MM-DD');
    return this.startDate;
  }
  yearToDate() {
    this.startDate = moment().startOf('year').format('YYYY-MM-DD');
    return this.startDate;
  }
}
