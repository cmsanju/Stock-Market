// Angular imports
import {Component, Input} from '@angular/core';

import { Router } from '@angular/router';

import { CompanyService } from 'src/app/service/company.service';
// PrimeNG imports

// Local imports
import {Company} from '../../model/company';

@Component({
  selector: 'company-save-modal',
  templateUrl: './company-save-modal.component.html',
  styleUrls: ['./company-save-modal.component.scss']
})
export class CompanySaveModalComponent {
  
  company: Company = new Company();
  submitted = false;

  constructor(private companyService: CompanyService,
    private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.companyService.create(this.company)
    .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
    this.router.navigate(['/companies']);
  }
}
