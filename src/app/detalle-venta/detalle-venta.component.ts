import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  randomDate!: Date;
  constructor() { }

  ngOnInit(): void {
    const startDate = new Date(2023, 0, 1).getTime();
    const currentDate = new Date().getTime();
    const randomTime = Math.random() * (currentDate - startDate) + startDate;
    this.randomDate = new Date(randomTime);
  }

  searchTerm: string = '';
  searchResults: any[] = [];

  search() {
  }
}
