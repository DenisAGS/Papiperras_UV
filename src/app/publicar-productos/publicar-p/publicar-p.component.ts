import { Component, NgModule, OnInit } from '@angular/core';
import { Producto } from './publicar-p.interface';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import * as productosJson from 'src/assets/json/productosJson.json';

@Component({
  selector: 'app-publicar-p',
  templateUrl: './publicar-p.component.html',
  styleUrls: ['./publicar-p.component.css']
})
export class PublicarPComponent implements OnInit {
  productos: Producto[] = [];
  productosEnMemoria: Producto[] = [];
  producto: Producto = {
    id:uuidv4(),
    nombre: '',
    precio: 0,
    cantidad: 0,
    descripcion: '',
    marca: '',
    modelo: '',
    fotos: [],
    terminosCondiciones: '',
    precioFinal: null
  }

  onFileChange(event: any) {
    const files = event.target.files;
    this.producto.fotos = Array.from(files);
  }
  imprimirProductos() {
    for (let i = 0; i < this.productos.length; i++) {
      const producto = this.productos[i];
      console.log(`Producto:`, producto.id);
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
    const productos = (productosJson as any).default;
    productos.push(this.producto);
    this.router.navigate(['/'], { state: { producto: this.producto } });
    this.producto = {
      id: '',
      nombre: '',
      precio: 0,
      cantidad: 0,
      descripcion: '',
      marca: '',
      modelo: '',
      fotos: [],
      terminosCondiciones:'',
      precioFinal: null
    };
    console.log(productos);  
  }

  imprimirProductosEnMemoria() {
    for (let i = 0; i < this.productosEnMemoria.length; i++) {
      const producto = this.productosEnMemoria[i];
      console.log(`Producto ${i + 1}:`);
      console.log('ID:', producto.id);
      console.log('Nombre:', producto.nombre);
      console.log('Precio:', producto.precio);
      console.log('Cantidad:', producto.cantidad);
      console.log('Descripción:', producto.descripcion);
      console.log('Marca:', producto.marca);
      console.log('Modelo:', producto.modelo);
      console.log('Fotos:', producto.fotos);
      console.log('Términos y Condiciones:', producto.terminosCondiciones);
      console.log('------------------------------');
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  } 

}