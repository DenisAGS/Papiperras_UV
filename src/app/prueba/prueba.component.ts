import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  data = [
    ['01008','assets/Images/devolucion/celular.png', 'Celulares', 'Error de modelo', 'Producto original', 'Orizaba', this.getRandomDate(), '0011'],
    ['01009','assets/Images/devolucion/zapatos.png', 'Zapatos', 'Otra talla', 'Original', 'Orizaba', this.getRandomDate(), '0012'],
    ['01010','assets/Images/devolucion/tablet.png', 'Tablet', 'Otro tamaño', 'Nuevo', 'Cordoba', this.getRandomDate(), '0013'],
    ['01011','assets/Images/devolucion/laptop.png', 'Laptop', 'no es el modelo', 'Original', 'Fortin', this.getRandomDate(), '0014'],
    ['01012','assets/Images/devolucion/camara.png', 'Camara web', 'No es el modelo', 'Original', 'Mendoza', this.getRandomDate(), '0015'],
    ['01013','assets/Images/devolucion/audifonos.png', 'Audifonos', 'Estan rotos', 'Original', 'Maltrata', this.getRandomDate(), '0016'],

  ];

  searchTerm: string = '';
  currentPage = 1;
  recordsPerPage = 5;
  searchResults: any[] = [];
  

  search() {
    if (this.searchTerm.trim() !== '') {
      this.searchResults = this.data.filter(row =>
        row.some(cell => cell.toString().toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
      this.currentPage = 1; // Reinicia la página actual al realizar una búsqueda
    } else {
      this.searchResults = [];
    }
  }
  
  get columns() {
    return ['ID','Foto', 'Producto', 'Motivo', 'Estado', 'Lugar', 'Fecha', 'N. Cliente'];
  }

  get displayedData() {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    const endIndex = startIndex + this.recordsPerPage;
  
    if (this.searchResults.length > 0) {
      return this.searchResults.slice(startIndex, endIndex);
    }
  
    return this.data.slice(startIndex, endIndex);
  }
  

  get totalPages() {
    return Math.ceil(this.data.length / this.recordsPerPage);
  }

  getPageNumbers() {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  //Poner una fecha aleatoria
  getRandomDate(): string {
    const startDate = new Date(2023, 0, 1).getTime(); // Fecha inicial
    const endDate = new Date().getTime(); // Fecha actual
    const randomDate = new Date(Math.random() * (endDate - startDate) + startDate);
    return randomDate.toLocaleDateString();
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
