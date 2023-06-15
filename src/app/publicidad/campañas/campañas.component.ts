import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as productosJson from 'src/assets/json/productosJson.json'
import * as campaniasJson from 'src/assets/json/campaniasJson.json'
import { Producto } from 'src/app/publicar-productos/publicar-p/publicar-p.interface';
import { Campania } from '../publicidad2/publicidad2.interface';

@Component({
  selector: 'app-campañas',
  templateUrl: './campañas.component.html',
  styleUrls: ['./campañas.component.css']
})
export class CampañasComponent implements OnInit {
  productos: Producto[] = (productosJson as any).default;
  campaniass: Campania[] = (campaniasJson as any).default;
  id:any;
  campania: any;
  nombre:any;

  impresiones!:number;
  clics!:number;
  ventas!:number;
  ingresos!:number;
  inversion!:number;
  invCos!:number;
  estado: boolean = true;
  

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  productosEncontrados: Producto[] | undefined;

  getProductobyId(campaniaId: string): Producto[] | undefined {
    const campania = this.campaniass.find(campania => campania.id === campaniaId);
    if (campania && campania.productos) {
      const idsProductos = campania.productos;
      const productosCampaña = idsProductos.map(id => {
        return this.productos.find(producto => producto.id === id);
      });
  
      const productosEncontrados = productosCampaña.filter(producto => producto !== undefined) as Producto[];
  
      return productosEncontrados;
    }
  
    return undefined;
  }

  mostrarProductos(campaniaId: string): void {
    this.productosEncontrados = this.getProductobyId(campaniaId);
  }

  datosAleatorios(n1:number, n2:number){
    return Math.floor(Math.random() * (n1 - n2 + 1)) + n2;
  }

  estadoP(estado:boolean){
    return true;
  }

  ngOnInit(): void {
    this.campania = history.state.campania;
    this.nombre = history.state.campania['nombre'];
    this.id= history.state.campania['id'];
    console.log(this.campania);
    console.log(this.nombre);
    this.getProductobyId(this.id);
    this.mostrarProductos(this.id);

  }

}
