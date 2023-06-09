import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productos = [
    { nombre: 'Producto 1', estado: 'enPreparacion',precio: 35, descripcion:'nuevo'  },
  ];

}
