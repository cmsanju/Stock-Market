// Angular imports
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// Local imports
import {Company} from '../model/company';
import { Stock } from '../model/stock';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl = 'http://localhost:8000/stocks/';

  constructor(private http: HttpClient) {
  }

  getAll():  Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  create(stock: Stock): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, stock);
  }

  update(id: number, stock: Stock): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + stock.id, stock);
  }

  delete(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
