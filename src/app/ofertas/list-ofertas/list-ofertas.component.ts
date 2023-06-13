import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Producto } from 'src/app/publicar-productos/publicar-p/publicar-p.interface';
import * as ofertasJson from 'src/assets/json/ofertasJson.json';
import * as productosJson from 'src/assets/json/productosJson.json'

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {
  datos:any;
  descuento!:number; 
  precioFinal!:number; 
  fechaInicio!: Date;
  fechaFin!: Date;
  

  productos: Producto[] = (productosJson as any).default;
  ofertas: any[] = (ofertasJson as any).default;
  searchTerm: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}


  getProductobyId(id: string): Producto | undefined {
    const producto = this.productos.find(producto => producto.id === id);
    if (producto && this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      const nombreLower = producto.nombre.toLowerCase();
  
      if (nombreLower.indexOf(searchTermLower) === -1) {
        return undefined;
      }
    }  
    if (producto && producto.precioFinal === null && this.ofertas.length > 0) {
      const oferta = this.ofertas.find(oferta => oferta.id === id);
  
      if (oferta) {
        const descuento = oferta.descuento;
        const precioDescuento = producto.precio * (1 - (descuento / 100));
        const precioDescuentoEntero = parseInt(precioDescuento.toFixed(0), 10);
        producto.precioDescuento = precioDescuentoEntero;
      }
    }
  
    return producto;
  }

  updateTable(): void {
    const datosModificados = this.route.snapshot.queryParamMap.get('datosModificados');
    if (datosModificados) {
      const datosModificadosParsed = JSON.parse(datosModificados);
      const { id, descuento, precioFinal, fechaInicio, fechaFin } = datosModificadosParsed;
      this.ofertas.forEach(oferta => {
        if (oferta.id === id) {
          oferta.descuento = descuento;
          oferta.precioFinal = precioFinal;
          oferta.fechaInicio = fechaInicio;
          oferta.fechaFin = fechaFin;
        }
      });
    }
  }
  redireccionar(id: string) {
  const producto = this.getProductobyId(id);
  if (producto) {
    const oferta = this.ofertas.find(o => o.id === id);
    if (oferta) {
      this.router.navigate(['/ofertas'], { state: { producto, oferta } });
      setTimeout(() => {
        this.updateTable();
      }, 100);
    }
  }
}

  ngOnInit(): void {
  const datosModificados = this.route.snapshot.queryParamMap.get('datosModificados');
  if (datosModificados) {
    const datosModificadosParsed = JSON.parse(datosModificados);
    console.log('Datos modificados:', datosModificadosParsed);
    }
    this.updateTable();
  }
}