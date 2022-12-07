import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import { CompanyListComponent } from './component/company-list/company-list.component';
import { StockDetailsComponent } from './component/stock-details/stock-details.component';
import { StockListComponent } from './component/stock-list/stock-list.component';
import { StockUpdateComponent } from './component/stock-update/stock-update.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CompanyUpdateComponent } from './component/company-update/company-update.component';
import { CompanySaveModalComponent } from './component/company-save-modal/company-save-modal.component';
import { StockCreateComponent } from './component/stock-create/stock-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },

  {path: 'companies', component: CompanyListComponent},
  {path: 'companies/:id', component: CompanyDetailsComponent},
  // {path: '**', redirectTo: '/countries'},
  {path: 'stocks', component: StockListComponent},
  {path: 'stocks/:id', component: StockDetailsComponent},
  {path: 'stockupdate/:id', component:StockUpdateComponent},
  {path: 'companyupdate/:id', component:CompanyUpdateComponent},
  {path: 'addcompany', component:CompanySaveModalComponent},
  {path: 'addstock', component:StockCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
