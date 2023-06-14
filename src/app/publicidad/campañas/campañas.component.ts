import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campañas',
  templateUrl: './campañas.component.html',
  styleUrls: ['./campañas.component.css']
})
export class CampañasComponent implements OnInit {
  campania: any;
  nombre:any;
  campanias: any[] = [
    {
      estado: 'activo',
      foto: '../../../assets/Images/Sergio/Productos/produc1.png',
      titulo: 'Audifonos Sony',
      impresiones: 130,
      clics: 80,
      ventas: 14,
      ingresos: 1150,
      inversion: 300,
      inv_cos: 26
    },
    {
      estado: 'activo',
      foto: '../../../assets/Images/Sergio/Productos/produc2.png',
      titulo: 'Airpods',
      impresiones: 130,
      clics: 80,
      ventas: 14,
      ingresos: 1150,
      inversion: 300,
      inv_cos: 26
    },
    {
      estado: 'activo',
      foto: '../../../assets/Images/Sergio/Productos/produc3.png',
      titulo: 'Audifonos patito',
      impresiones: 130,
      clics: 80,
      ventas: 14,
      ingresos: 1150,
      inversion: 300,
      inv_cos: 26
    }
  ]
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.campania = history.state.campania;
    this.nombre = history.state.campania['nombre'];
    console.log(this.campania);
    console.log(this.nombre);
  }

}
