import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Company } from 'src/app/model/company';
import { Employee } from 'src/app/model/employee.model';
import { CompanyService } from 'src/app/service/company.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  id: number;
  company: Company;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.company = new Company();

    this.id = this.route.snapshot.params['id'];
    this.companyService.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.companyService.update(this.id, this.company)
      .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
    this.router.navigate(['/companies']);
    }

  
  list(){
    this.router.navigate(['companies']);
  }

}
