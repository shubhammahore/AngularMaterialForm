import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import {ExtractDateTime} from '../shared/ExtractDateTime';
@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {
    startDateTime:Date;
    endDateTime:Date;
    rowData: any;
    isCheckedDate=false;
    isCheckedTime=false;
    onSubmitForm: FormGroup;
    ngOnInit() {
    }
    constructor(formBuilder: FormBuilder,private http: HttpClient) {
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
      searchByTime:boolean,startDate:Date,
      startTime:Date,endDate:Date,endTime:Date})
        {
          if(formData.searchByDate){
            var obj=new ExtractDateTime();
            if(formData.searchByTime){
              this.startDateTime=obj.getDateTime(formData.startDate,formData.startTime);
              this.endDateTime=obj.getDateTime(formData.endDate,formData.endTime);      
            }
            else{
              this.startDateTime=obj.getStartDate(formData.startDate);
              this.endDateTime=obj.getEndDate(formData.endDate);      
            }  
        }
        console.log(formData);
        console.log(this.startDateTime);
        console.log(this.endDateTime);
          //console.log(new moment(`2018-08-20T07:37:09.000Z`).format('YYYY-MM-DD hh:mm'));
          //8/1/2019 7:40:37 PM   //C# DateTime Format
      this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    }

  columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true},
      {headerName: 'Model', field: 'model', sortable: true, filter: true},
      {headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

}
