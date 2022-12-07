import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Employee } from 'src/app/model/employee.model';
import { Stock } from 'src/app/model/stock';
import { EmployeeService } from 'src/app/service/employee.service';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-stock-update',
  templateUrl: './stock-update.component.html',
  styleUrls: ['./stock-update.component.css']
})
export class StockUpdateComponent implements OnInit {

  id: number;
  stock: Stock;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private stockService: StockService) { }

  ngOnInit() {
    this.stock = new Stock();

    this.id = this.route.snapshot.params['id'];
    this.stockService.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.stock = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.stockService.update(this.id, this.stock)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stock = new Stock();
    this.router.navigate(['/stocks']);
    }

  
  list(){
    this.router.navigate(['/stocks']);
  }
}
