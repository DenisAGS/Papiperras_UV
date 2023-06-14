import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemasServices } from '../services/problemas.services';

@Component({
  selector: 'app-problemas-productos',
  templateUrl: './problemas-productos.component.html',
  styleUrls: ['./problemas-productos.component.css']
})
export class ProblemasProductosComponent implements OnInit {

  constructor(private router: Router, private problemasService: ProblemasServices  ) {}
  
  redirectToReclamos(){
    this.router.navigate(['/reclamos-formulario']);
  }

  data : any[] = [];
  elementosPorPagina = 5;
  paginaActual = 1;

  searchText : any;
  filtroSeleccionado : string = '';

  dataPagina : any[] = [];//datos para la paginacion
  dataCompleta : any[] = [];//datos para la paginacion
  
  onPageChange(event: any) {
    this.paginaActual = event; // Actualizar la página actual con el valor proporcionado por el evento
    this.actualizarDatosTabla(); // Método para actualizar los datos de la tabla según la página actual
  }

  cambioPagina(paginaActual : number){
    this.paginaActual = paginaActual
  }

  actualizarDatosTabla() {//actualizar cada vez que se haga cambio de pagina en la tabla
    const indiceInicial = (this.paginaActual - 1) * this.elementosPorPagina;
    const indiceFinal = indiceInicial + this.elementosPorPagina;
    this.dataPagina = this.dataCompleta.slice(indiceInicial, indiceFinal);
  }

  /* **********************************FILTRO************************************************************/
  
  filtrarTabla() {
    if (this.filtroSeleccionado) {
      this.dataPagina = this.data.filter(item => {
        // Asegúrate de ajustar esta lógica según los campos que deseas filtrar
        return (
          item.tipo_producto.toLowerCase().includes(this.filtroSeleccionado.toLowerCase()) ||
          item.motivo.toLowerCase().includes(this.filtroSeleccionado.toLowerCase())
        );
      });
    } else {
      this.dataPagina = [...this.dataCompleta];
    }
  }
  
 
  datosFiltrados : any[] = [];
  
  filtrarPorDia(fecha: Date) {
    // Filtrar por día
    const fechaInicio = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
    const fechaFin = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate() + 1);
  
    this.dataPagina = this.data.filter(dato => {
      const fechaDato = new Date(dato.fecha); // Asegúrate de adaptar esto según la estructura de tu objeto JSON
      return fechaDato >= fechaInicio && fechaDato < fechaFin;
    });
  }
  
  
  filtrarPorSemana(fecha: Date) {
    // Filtrar por semana
    const primerDiaSemana = fecha.getDate() - fecha.getDay();
    const fechaInicio = new Date(fecha.getFullYear(), fecha.getMonth(), primerDiaSemana);
    const fechaFin = new Date(fecha.getFullYear(), fecha.getMonth(), primerDiaSemana + 7);
    // Realizar la lógica de filtrado con las fechas obtenidas
  }
  
  filtrarPorMes(fecha: Date) {
    // Filtrar por mes
    const fechaInicio = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
    const fechaFin = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
    // Realizar la lógica de filtrado con las fechas obtenidas
  }
  
  filtrarPorAnio(fecha: Date) {
    // Filtrar por año
    const fechaInicio = new Date(fecha.getFullYear(), 0, 1);
    const fechaFin = new Date(fecha.getFullYear(), 11, 31);
    // Realizar la lógica de filtrado con las fechas obtenidas
  }  

  filtrar(tipoFiltro: string) {
    const fechaActual = new Date();
  
    if (tipoFiltro === 'dia') {
      this.filtrarPorDia(fechaActual);
    } else if (tipoFiltro === 'semana') {
      this.filtrarPorSemana(fechaActual);
    } else if (tipoFiltro === 'mes') {
      this.filtrarPorMes(fechaActual);
    } else if (tipoFiltro === 'anio') {
      this.filtrarPorAnio(fechaActual);
    }
  } 

  /* **********************************************FIN DEL FILTRO************************************************ */
  
  ngOnInit(){
    this.problemasService.getJsonData().subscribe(data => {//mostrar datos en la tabla
      this.data = data;//datos
    });
    this.dataPagina = [...this.dataCompleta];//logica del arreglo para la paginacion
   }

}
