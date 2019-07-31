import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ag-grid-show-table',
  templateUrl: './ag-grid-show-table.component.html',
  styleUrls: ['./ag-grid-show-table.component.css']
})
export class AgGridShowTableComponent implements OnInit {

  ngOnInit(){

  }
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: "athlete",
        width: 150,
        suppressSizeToFit: true
      },
      {
        field: "age",
        width: 90,
        minWidth: 50,
        maxWidth: 100
      },
      {
        field: "country",
        width: 120
      },
      {
        field: "year",
        width: 90
      },
      {
        field: "date",
        width: 110
      },
      {
        field: "sport",
        width: 110
      },
      {
        field: "gold",
        width: 100
      },
      {
        field: "silver",
        width: 100
      },
      {
        field: "bronze",
        width: 100
      },
      {
        field: "total",
        width: 100
      }
    ];
    this.defaultColDef = { resizable: true };
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }
}