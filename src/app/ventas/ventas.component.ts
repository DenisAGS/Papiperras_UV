import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  enPreparacion: string = '50 ventas';
  lista: string = '25 ventas';
  transito: string = '15 ventas';
  problemas: string = '2 ventas';
  entregado: string = '0 ventas';

  constructor() { }

  ngOnInit(): void {
  }

  searchTerm: string = '';
  searchResults: any[] = [];

  search() {
  }


  cambiarContenido(id: string, nuevoContenido: string) {
    if (id === 'enPreparacion') {
      this.enPreparacion = nuevoContenido;
    } else if (id === 'Lista') {
      this.lista = nuevoContenido;
    }
  }

  actualizarContenido() {
    this.cambiarContenido('enPreparacion', '80 ventas');
  }

}
