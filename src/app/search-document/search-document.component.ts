import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.css']
})
export class SearchDocumentComponent implements OnInit {
  includeDeleted=false;
  includeTsSearch=false;
  searchByDate=false;
  
  options: FormGroup;

  
constructor(private http: HttpClient,fb: FormBuilder) {
  this.options = fb.group({
    hideRequired: false,
    floatLabel: 'auto',
  });
}
  
  
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];

rowData: any;


ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
}








  OnRegister(postData : { searchValue:string}){
    // this.httpclient.post('http://localhost:8080/api/employees/',postData)
    // .subscribe(posts=>{
    //   console.log(posts);
    //   console.log("Registered Success");  
    //})
    console.log(postData.searchValue);
    //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  onClickSubmit(){  
  }

}
