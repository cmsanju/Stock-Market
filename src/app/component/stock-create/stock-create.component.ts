import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { Company } from 'src/app/model/company';
import { Employee } from 'src/app/model/employee.model';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss']
})
export class StockCreateComponent implements OnInit {

  stock: Stock = new Stock();
  submitted = false;
  stockForm: FormGroup;

  constructor(private stockService: StockService,
    private router: Router, private fb:  FormBuilder) { 

    }

  ngOnInit() {
    
  }
  onSubmit() {
    this.submitted = true;
    this.stockService.create(this.stock)
    .subscribe(data => console.log(data), error => console.log(error));
    this.stock = new Stock();
    this.router.navigate(['/stocks']);
  }

}
