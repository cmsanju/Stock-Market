import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DataTablesModule } from 'angular-datatables';


// Local imports

import {CompanyListComponent} from './component/company-list/company-list.component';
import {CompanyDetailsComponent} from './component/company-details/company-details.component';
import {CompanySaveModalComponent} from './component/company-save-modal/company-save-modal.component';
import { StockCreateComponent } from './component/stock-create/stock-create.component';
import { StockListComponent } from './component/stock-list/stock-list.component';
import { StockDetailsComponent } from './component/stock-details/stock-details.component';
import { CompanyService } from './service/company.service';
import { StockService } from './service/stock.service';
import { StockUpdateComponent } from './component/stock-update/stock-update.component';
import { CompanyUpdateComponent } from './component/company-update/company-update.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    CompanySaveModalComponent,
    StockCreateComponent,
    StockListComponent,
    StockDetailsComponent,
    StockUpdateComponent,
    CompanyUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    
  ],
  providers: [EmployeeService,CompanyService,StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
