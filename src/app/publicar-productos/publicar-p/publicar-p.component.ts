import { Component, NgModule, OnInit } from '@angular/core';
import { Producto } from './publicar-p.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-p',
  templateUrl: './publicar-p.component.html',
  styleUrls: ['./publicar-p.component.css']
})
export class PublicarPComponent implements OnInit {
  productos: Producto[] = [];
  producto: Producto = {
  nombre: '',
  precio: 0,
  cantidad: 0,
  descripcion: '',
  marca: '',
  modelo: '',
  fotos: [],
  terminosCondiciones: ''
  }

  onFileChange(event: any) {
    const files = event.target.files;
    this.producto.fotos = Array.from(files);
  }
  imprimirProductos() {
    for (let i = 0; i < this.productos.length; i++) {
      const producto = this.productos[i];
      console.log(`Producto ${i + 1}:`);
      console.log('Nombre:', producto.nombre);
      console.log('Precio:', producto.precio);
      console.log('Cantidad:', producto.cantidad);
      console.log('Descripción:', producto.descripcion);
      console.log('Marca:', producto.marca);
      console.log('Modelo:', producto.modelo);
      console.log('Términos y Condiciones:', producto.terminosCondiciones);
      console.log('------------------------------');
    }
  }
  agregarProducto() {
    this.productos.push(this.producto);
    this.producto = {
      nombre: '',
      precio: 0,
      cantidad: 0,
      descripcion: '',
      marca: '',
      modelo: '',
      fotos: [],
      terminosCondiciones:''
    };
  }

  aplicarOferta(producto: Producto): number {
    if (producto.oferta) {
      const { porcentaje, fechaInicio, fechaFin } = producto.oferta;
      const ahora = new Date();
  
      if (ahora >= fechaInicio && ahora <= fechaFin) {
        const descuento = producto.precio * (porcentaje / 100);
        return producto.precio - descuento;
      }
    }
  
    return producto.precio;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  } 

}
