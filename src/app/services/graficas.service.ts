import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class GraficasService {
    private graficasUrl = 'assets/json/graficas.json';

    constructor(private http: HttpClient) { }

    getGraficasData(): Observable<any> {
        return this.http.get<any>(this.graficasUrl);
    }

}
