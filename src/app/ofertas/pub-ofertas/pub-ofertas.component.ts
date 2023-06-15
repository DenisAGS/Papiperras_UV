import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productosJson from 'src/assets/json/productosJson.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pub-ofertas',
  templateUrl: './pub-ofertas.component.html',
  styleUrls: ['./pub-ofertas.component.css']
})
export class PubOfertasComponent implements OnInit {
  producto: any;
  id!:any;
  oferta: any
  nombre!:string;
  descuento!:number;
  precioFinal!:number;
  precio!:number;
  fechaInicio!: Date;
  fechaFin!: Date;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.producto = history.state.producto;
    this.oferta = history.state.oferta;
    this.id = history.state.producto['id'];
    this.nombre = history.state.producto['nombre'];
    this.descuento = history.state.oferta['descuento'];
    this.precio = history.state.producto['precio']
    this.precioFinal = this.precio * (1 - (this.descuento / 100));
    this.fechaInicio = history.state.oferta['fechaInicio'];
    this.fechaFin = history.state.oferta['fechaInicio'];
    // Formatear las fechas
    this.calcularPrecioFinal();
    console.log('Datos del producto:', this.producto);
    console.log('nombre:', this.nombre);
    console.log('Descuento:', this.descuento);
    console.log('PrecioF:', this.precioFinal);
    console.log('precio:', this.precio);
    console.log('precio:', this.fechaInicio);
    console.log('precio:', this.fechaFin);
  }

  calcularPrecioFinal(): void {
    this.precioFinal = this.precio * (1 - (this.descuento / 100));
  }


  
  parseFecha(fecha: string): string {
    const partes = fecha.split('/');
    if (partes.length === 3) {
      const fechaObj = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]));
      return fechaObj.toISOString().substring(0, 10);
    }
    return '';
  }

  formatFecha(fecha: string): string {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate().toString().padStart(2, '0');
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaObj.getFullYear().toString();
    return `${dia}/${mes}/${anio}`;
  }

  

  si(): void {
    // Obtener los datos modificados
    const datosModificados= {
      id: this.id,
      descuento: this.descuento, // Nuevo porcentaje de oferta
      precioFinal: this.precioFinal, // Nuevo precio final
      fechaInicio: this.fechaInicio, // Nueva fecha de inicio de oferta
      fechaFin: this.fechaFin // Nueva fecha de fin de oferta
    };
  
    // Construir la URL con los parámetros de consulta
    const url = '/list-ofertas?datosModificados=' + encodeURIComponent(JSON.stringify(datosModificados));

    // Navegar a ListOfertasComponent mediante la URL construida
    this.router.navigateByUrl(url);
  }
  cancelar(){
    this.router.navigate(['/list-ofertas']);
  }
}
