import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos!: any[]; // Array para almacenar los productos del JSON
  currentIndex: number = 0; // Índice del producto actual

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('assets/json/productos.json').subscribe(data => {
      this.productos = data.productos;
    });
  }

  next() {
    // Avanzar al siguiente conjunto de productos
    if (this.currentIndex < this.productos.length - 4) {
      this.currentIndex++;
    }
  }

  prev() {
    // Retroceder al conjunto de productos anterior
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onImageClick(): void {
    this.router.navigate(['/detalle']); // Reemplaza '/other-page' con la ruta deseada para la otra pantalla
  }

  goToProduct(id: number) {
    console.log('Ir al producto con ID:', id);
  }

}
