import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/publicar-productos/publicar-p/publicar-p.interface';
import * as productosJson from 'src/assets/json/productosJson.json';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  productos: Producto[] = [];
  productosEnMemoria: Producto[] = [];
  producto: Producto = {
    id:'',
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

  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(event: any) {
    const files = event.target.files;
    this.producto.fotos = Array.from(files);
  }
}
