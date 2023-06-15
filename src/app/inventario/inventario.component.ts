import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  
  currentPage = 1;
  recordsPerPage = 3;

  selectAll = false;
  checkboxes: { [key: string]: boolean } = {};

  data: any[]  = [
    ['01008','assets/Images/devolucion/celular.png', 'Celulares', 'Retmi', '$5000', 1000, 500, 100, ],
    ['01009','assets/Images/devolucion/zapatos.png', 'Zapatos', 'Pirma', '$400', 20, 60, 10, ],
    ['01010','assets/Images/devolucion/tablet.png', 'Tablet', 'Apple', '$4050', 60, 20, 10, ],
    ['01011','assets/Images/devolucion/laptop.png', 'Laptop', 'Lenovo', '$400', 700, 5, 20,],
    ['01012','assets/Images/devolucion/camara.png', 'Camara web', 'Ap', '$3000', 100, 110, 10, ],
    ['01013','assets/Images/devolucion/audifonos.png', 'Audifonos', 'Sony','$3020', 120, 20, 40, ],
  ];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.data.forEach(row => {
      const stockInicial = row[5];
      const entrada = row[6];
      const salida = row[7];
      const total = stockInicial + entrada - salida;
      row.push(total);
    });
  }

  selectAllRows() {
    for (let row of this.displayedData) {
      this.checkboxes[row[0]] = this.selectAll;
    }
  }

    //Logica de la tabla y paginacion
    get columns() {
      return ['ID','Foto', 'Producto', 'Descripcion', 'Precio', 'Stock inicial', 'Entrada', 'Salida', 'Total'];
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
