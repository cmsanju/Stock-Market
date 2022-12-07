import { Component, OnInit,Input,Output,EventEmitter,Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';

import { Company } from 'src/app/model/company';
import { Stock } from 'src/app/model/stock';
import { EmployeeService } from 'src/app/service/employee.service';

import { StockService } from 'src/app/service/stock.service';

import { StockCreateComponent } from '../stock-create/stock-create.component';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {

stocks: Observable<ApiResponse>;

constructor(private stockService: StockService,
  private router: Router) { 
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
    
  }

ngOnInit() {
  this.stocks = this.stockService.getAll();
  setTimeout(function(){
    $(function(){
      $('#example').DataTable();
  });
  },2000);

}

deleteStock(id: number) {
  this.stockService.delete(id)
    .subscribe(
      data => {
        console.log(data);
        this.stocks = this.stockService.getAll();
      },
      error => console.log(error));
}

updateStock(id: number){
  this.router.navigate(['stockupdate', id]);
}
}
