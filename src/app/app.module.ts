import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { MatIconModule, MatSelectModule, MatNativeDateModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { ShowDataComponent } from './show-data/show-data.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridShowTableComponent } from './ag-grid-show-table/ag-grid-show-table.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    AgGridShowTableComponent,
    FormFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    RouterModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
    
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
