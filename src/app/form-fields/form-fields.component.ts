import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {
  rowData: any;
  isChecked=true;
  onSubmitForm: FormGroup;
  onChange($event){
    console.log($event)
  }
  constructor(formBuilder: FormBuilder,private http: HttpClient) {
    this.onSubmitForm = formBuilder.group({
      documentId:'',
      includeDeleted: false,
      includeTsSearch:false,
      docTypeFilter:false,
      searchByDate:false,
      startDate:'',
      endDate:''
    });
  }
  onSubmit(formData){
    console.log(formData);
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  ngOnInit() {
  }

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];




}
