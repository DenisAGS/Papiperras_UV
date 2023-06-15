import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturacionft',
  templateUrl: './facturacionft.component.html',
  styleUrls: ['./facturacionft.component.css']
})
export class FacturacionftComponent implements OnInit {

  data = [
    ['01008','Celular', 'Jose', 'Efectivo', '$300', 'Orizaba', this.getRandomDate(), '🟢 Realizado'],
    ['01009','Zapatos', 'Raul', 'Transferencia', '$700', 'Orizaba', this.getRandomDate(), '🟡 Pendiente'],
    ['01010','Tablet', 'Marcos', 'Efectivo', '$300', 'Cordoba', this.getRandomDate(), '🔴 Declinado'],
  ];

  currentPage = 1;
  recordsPerPage = 4;

  searchTerm: string = '';
  searchResults: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  search() {

  }

  //Logica de la tabla y paginacion
  get columns() {
    return ['ID','Producto', 'Nombre', 'Tipo de pago', 'Precio', 'Lugar', 'Fecha y Hora', 'Status'];
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

    //Poner una fecha aleatoria
    getRandomDate(): string {
      const startDate = new Date(2023, 0, 1).getTime(); // Fecha inicial
      const endDate = new Date().getTime(); // Fecha actual
      const randomDate = new Date(Math.random() * (endDate - startDate) + startDate);
      return randomDate.toLocaleDateString();
    }  

    filteredData: any[]  = [];

    filterByDate(selectedDate: string) {
      if (selectedDate) {
        this.filteredData = this.data.filter(row => row[6] === selectedDate);
      } else {
        this.filteredData = this.data;
      }
    }
    
  }