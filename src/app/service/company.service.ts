// Angular imports
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// Local imports
import {Company} from '../model/company';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:8000/companies/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  create(company: Company) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, company);
  }

  update(id: number, company: Company): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + company.id, company);
  }

  delete(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
