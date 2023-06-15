import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-estadocuenta',
  templateUrl: './estadocuenta.component.html',
  styleUrls: ['./estadocuenta.component.css'],
  providers: [FilterPipe],
})
export class EstadocuentaComponent implements OnInit {

  data = [
    ['01008','Celular', 'Jose', 'Efectivo', '$300', 'Orizaba', this.getRandomDate(), '🟢 Realizado'],
    ['01009','Zapatos', 'Raul', 'Transferencia', '$700', 'Orizaba', this.getRandomDate(), '🟡 Pendiente'],
    ['01010','Tablet', 'Marcos', 'Efectivo', '$300', 'Cordoba', this.getRandomDate(), '🔴 Declinado'],
    ['01011','Laptop', 'Daniel', 'Transferencia', '$570', 'Fortin', this.getRandomDate(), '🟡 Pendiente'],
    ['01012','Camara web', 'Elizabeth', 'Efectivo', '$640', 'Mendoza', this.getRandomDate(), '🟢 Realizado'],
    ['01013','Audifonos', 'Rebeca', 'Transferencia', '$73', 'Maltrata', this.getRandomDate(), '🟢 Realizado']
  ];


  currentPage = 1;
  recordsPerPage = 4;

  searchTerm: string = '';
  searchResults: any[] = [];
  

  ngOnInit(): void {
  }

  search() {
    this.searchResults = this.data.filter(item => {
      return item[1].toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  // Lógica de la tabla y paginación
  get columns() {
    return ['','Producto', 'Nombre', 'Tipo de pago', 'Precio', 'Lugar', 'Fecha y Hora', 'Status'];
  }

  selectedObject: any = null;

  selectObject(row: any) {
    this.selectedObject = row;
  }  
  
  get displayedData() {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    const endIndex = startIndex + this.recordsPerPage;
    const slicedData = this.data.slice(startIndex, endIndex);
    if (slicedData.length < this.recordsPerPage && this.data.length > endIndex) {
      const remainingRows = this.recordsPerPage - slicedData.length;
      const remainingData = this.data.slice(endIndex, endIndex + remainingRows);
      return [...slicedData, ...remainingData];
    }
    return slicedData;
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

  // Obtener una fecha aleatoria
  getRandomDate() {
    const startDate = new Date(2023, 0, 1).getTime(); // Fecha inicial
    const endDate = new Date().getTime(); // Fecha actual
    const randomDate = new Date(Math.random() * (endDate - startDate) + startDate);
    return randomDate.toLocaleString(); // Devuelve la fecha y hora en formato local
  }
}
