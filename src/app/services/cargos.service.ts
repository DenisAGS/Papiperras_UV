import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargosService {
  private cargosUrl = 'assets/json/cargos.json';

  constructor(private http: HttpClient) { }

  getCargos(): Observable<any> {
    return this.http.get<any>(this.cargosUrl);
  }
}

