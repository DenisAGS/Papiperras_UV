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
  categorias: string[] = ['Todas', 'Categoría 1', 'Categoría 2'];
  imagenes: string[] = [];
  searchText: string = '';
  filteredProductos: any[] = [];
  selectedCategory: string = 'Todas';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('assets/json/productos.json').subscribe(data => {
      this.productos = data.productos;

      this.filteredProductos = this.productos;
      this.imagenes = this.filteredProductos.slice(0, 6).map(producto => producto.imagen);
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

  filterProducts() {
    if (this.selectedCategory === 'Todas') {
      this.filteredProductos = this.productos.filter(producto =>
        producto.descripcion.toLowerCase().includes(this.searchText.toLowerCase())
      ).slice(this.currentIndex, this.currentIndex + 4);
    } else {
      this.filteredProductos = this.productos.filter(producto =>
        producto.categoria === this.selectedCategory &&
        producto.descripcion.toLowerCase().includes(this.searchText.toLowerCase())
      ).slice(this.currentIndex, this.currentIndex + 4);
    }
  
    // Actualizar las imágenes
    this.imagenes = this.filteredProductos.map(producto => producto.imagen);
  }
}
