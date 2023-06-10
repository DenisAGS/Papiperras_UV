import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {
  
  productos = [
    { numeroenvio: '#1209', numeroproducto: '01008',estado: 'En transito', fechaenvio:'',  horaenvio:'', fechaentrega:''},
  ];

  constructor() {

  this.inicializarFechasEnvioYEntrega();    

   }

  ngOnInit(): void {
  }

  inicializarFechasEnvioYEntrega() {
    const fechaActual =new Date();

    //Recorrer la lista de productos
    this.productos.forEach(producto => {
      producto.fechaenvio = fechaActual.toLocaleDateString();
      producto.horaenvio = fechaActual.toLocaleTimeString();

      //Generar una fecha aleatoria posterior a la fecha de envio
      const fechaEntrega = new Date(fechaActual.getTime() + Math.random() * 604800000)  // 604800000 Milisegundos = 1 semana
      producto.fechaentrega = fechaEntrega.toLocaleDateString();
    });

  }
}
