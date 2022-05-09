import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  headers: HttpHeaders;
  constructor( private http: HttpClient ) { 
    this.headers = new HttpHeaders();
  }

  getClient(nit:string): Observable<Cliente>{
    this.headers = this.headers.append('Content-Type', 'application/json');
    return this.http.get<Cliente>(environment.apiUrl+'?nit='+nit, {headers: this.headers});
  }
}