import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { OwlDateTime } from 'ng-pick-datetime/date-time/date-time.class';
import { OwlDateTimeFormats } from 'ng-pick-datetime';
@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {
  myDate:OwlDateTimeFormats;
  rowData: any;
  isCheckedDate=false;
  isCheckedTime=false;
  onSubmitForm: FormGroup;
  onChange($event){
    console.log($event)
  }
  constructor(formBuilder: FormBuilder,private http: HttpClient) {
    let now = moment();
    console.log('hello world', now.format()); 
    console.log(now.add(7, 'days').format());


    this.onSubmitForm = formBuilder.group({
      documentId:'',
      includeDeleted: false,
      includeTsSearch:false,
      docTypeFilter:false,
      searchByDate:false,
      searchByTime:false,
      startDate:'',
      startTime:'',
      endDate:'',
      endTime:''

    });
  }
  onSubmit(formData:{documentId: string, includeDeleted: boolean,
     includeTsSearch: boolean, docTypeFilter: boolean, searchByDate: boolean,
     searchByTime:boolean,startDate:OwlDateTimeFormats,
     startTime:OwlDateTimeFormats,endDate:OwlDateTimeFormats,endTime:OwlDateTimeFormats
    }){
    console.log(formData.startDate);
    console.log(formData);
    this.myDate=formData.startDate;
    this.onWorkDate(this.myDate);

    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  
  onWorkDate(Date1){
    console.log(Date1);
    //console.log(new moment(`2018-08-20T07:37:09.000Z`).format('YYYY-MM-DD hh:mm'));
    //8/1/2019 7:40:37 PM   //C# DateTime Format
  }

  ngOnInit() {
  }

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];

}
