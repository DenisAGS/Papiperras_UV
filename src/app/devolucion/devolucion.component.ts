import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.css'],

})
export class DevolucionComponent implements OnInit {
  
  data = [
    ['01008','assets/Images/devolucion/celular.png', 'Celulares', 'Error de modelo', 'Producto original', 'Orizaba', this.getRandomDate(), '0011'],
    ['01009','assets/Images/devolucion/zapatos.png', 'Zapatos', 'Otra talla', 'Original', 'Orizaba', this.getRandomDate(), '0012'],
    ['01010','assets/Images/devolucion/tablet.png', 'Tablet', 'Otro tamaño', 'Nuevo', 'Cordoba', this.getRandomDate(), '0013'],
    ['01011','assets/Images/devolucion/laptop.png', 'Laptop', 'no es el modelo', 'Original', 'Fortin', this.getRandomDate(), '0014'],
    ['01012','assets/Images/devolucion/camara.png', 'Camara web', 'No es el modelo', 'Original', 'Mendoza', this.getRandomDate(), '0015'],
    ['01013','assets/Images/devolucion/audifonos.png', 'Audifonos', 'Estan rotos', 'Original', 'Maltrata', this.getRandomDate(), '0016'],

  ];

  currentPage = 1;
  recordsPerPage = 4;

  searchTerm: string = '';
  filteredDatos: any[] = [];
  filteredData: any[] = [];

  @ViewChild('searchInput', { static: false }) searchInputRef!: ElementRef<HTMLInputElement>;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredDatos = this.data;
  }

  search() {
    const searchTerm = this.searchInputRef.nativeElement.value.trim().toLowerCase();
    if (searchTerm !== '') {
      this.filteredData = this.data.filter((row) =>
        row[2].toString().toLowerCase().includes(searchTerm) // Columna del Producto (índice 2)
      );
    } else {
      this.filteredData = this.data;
    }
  }
  //Logica de la tabla y paginacion
  get columns() {
    return ['ID','Foto', 'Producto', 'Motivo', 'Estado', 'Lugar', 'Fecha', 'N. Cliente'];
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


    filterByDate(selectedDate: string) {
      if (selectedDate) {
        this.filteredData = this.data.filter(row => row[6] === selectedDate);
      } else {
        this.filteredData = this.data;
      }
    }
    
  }
