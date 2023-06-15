import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  product!: any[]; // Array para almacenar los productos del JSON
  currentIndex: number = 0; // Índice del producto actual
  categorias: string[] = ['Todas', 'Categoría 1', 'Categoría 2'];
  imagenes!: any [];
  searchText: string = '';
  filteredProductos: any[] = [];
  selectedCategory: string = 'Todas';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('assets/json/product.json').subscribe(data => {
      this.product = data.product;

      this.filteredProductos = this.product;
      this.imagenes = this.filteredProductos.slice(0, 6).map(product => product.imagen);
    });
  }

  next() {
    // Avanzar al siguiente conjunto de productos
    if (this.currentIndex < this.product.length - 4) {
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
    this.imagenes = this.filteredProductos.filter(
      (imagen) => imagen.categoria.toLowerCase().includes(this.searchText.toLowerCase())
    ).map(product => product.imagen);
  }
}
