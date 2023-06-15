import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketUrl = 'assets/json/ticket.json';

  constructor(private http: HttpClient) { }

  getTicket(): Observable<any> {
    return this.http.get<any>(this.ticketUrl);
  }
}
