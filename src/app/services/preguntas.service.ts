import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private preguntasURL = 'assets/json/preguntas.json';

  constructor(private http: HttpClient) { }

  getPreguntas(): Observable<any> {
    return this.http.get<any>(this.preguntasURL);
  }
  saveJsonData(data: any): Observable<any> {
    return this.http.put<any>(this.preguntasURL, data);
  }
}
