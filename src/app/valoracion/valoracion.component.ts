import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

interface Barra {
  valoracion: number;
  totalEstrellas: number;
  porcentajeValoracion: number;
}

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  barras: Barra[] = [
    { valoracion: 4, totalEstrellas: 5, porcentajeValoracion: 0 },
    { valoracion: 3, totalEstrellas: 5, porcentajeValoracion: 0 },
    { valoracion: 1, totalEstrellas: 5, porcentajeValoracion: 0 },
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    this.calcularPorcentajesValoracion();

  }

  calcularPorcentajesValoracion(): void {
    this.barras.forEach(barra => {
      barra.porcentajeValoracion = (barra.valoracion / barra.totalEstrellas) * 100;
    });
  }

}
