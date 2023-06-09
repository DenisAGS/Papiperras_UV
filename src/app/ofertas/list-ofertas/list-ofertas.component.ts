import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/publicar-productos/publicar-p/publicar-p.interface';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {
  productos : any[] = [
    {
      nombre: 'Audifonos Sony',
      foto: '../../../assets/Images/Sergio/Productos/produc1.png',
      precioOriginal: 1200,
      descuento: 14,
      nuevoPrecio: 1032,
      stock: 50
    },
    {
      nombre: 'Airpods',
      foto: '../../../assets/Images/Sergio/Productos/produc2.png',
      precioOriginal: 2600,
      descuento: 30,
      nuevoPrecio: 1820,
      stock: 81
    },
    {
      nombre: 'Audifonos patito',
      foto: '../../../assets/Images/Sergio/Productos/produc3.png',
      precioOriginal: 800,
      descuento: 20,
      nuevoPrecio: 640,
      stock: 24
    },
    {
      nombre: 'Samsung Galaxy S23+',
      foto:'../../../assets/Images/Sergio/Productos/produc3.png',
      precioOriginal: 17999,
      descuento: 10,
      nuevoPrecio: 16200,
      stock: 12
    },
    {
      nombre: 'Samsung Galaxy S23+',
      foto:'../../../assets/Images/Sergio/Productos/produc3.png',
      precioOriginal: 17999,
      descuento: 10,
      nuevoPrecio: 16200,
      stock: 12
    }
  ]

  itemsPorPagina = 3;
  paginaActual = 1;
  productosPaginados: any[] = [];
  paginas: number[] = [3];
  

  constructor(private router: Router) { 
    this.actualizarProductosPaginados();
    
  }


  ngOnInit(): void {
    
  }
  actualizarProductosPaginados() {
    const indiceInicial = (this.paginaActual - 1) * this.itemsPorPagina;
    const indiceFinal = indiceInicial + this.itemsPorPagina;
    this.productosPaginados = this.productos.slice(indiceInicial, indiceFinal);
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
    this.actualizarProductosPaginados();
  }

  redireccionar() {
  this.router.navigate(['/ofertas']);
  } 
}