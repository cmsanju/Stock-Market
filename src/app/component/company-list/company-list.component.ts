// Angular imports
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
// PrimeNG imports



// Local imports
import {Company} from '../../model/company';

import {CompanyService} from '../../service/company.service';
import {CompanySaveModalComponent} from '../company-save-modal/company-save-modal.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Observable<ApiResponse>;

  constructor(private companyService: CompanyService,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          $('#example').DataTable();
      });
      },2000);
      
    }

  ngOnInit() {
    this.companies = this.companyService.getAll();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }
  onRowSelect($event: any) {
    this.router.navigate(['companies', $event.data.id]);
  }

  deleteCompany(id: number) {
    this.companyService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.companies = this.companyService.getAll();
        },
        error => console.log(error));
  }

  updateCompany(id: number){
    this.router.navigate(['companyupdate', id]);
  }
  
}
