import { Component, OnInit } from '@angular/core';
import { PreguntasServices } from '../services/preguntas.services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preguntas-clientes',
  templateUrl: './preguntas-clientes.component.html',
  styleUrls: ['./preguntas-clientes.component.css']
})
export class PreguntasClientesComponent implements OnInit {

  constructor(private preguntasService: PreguntasServices, private router: Router, private route: ActivatedRoute) { }

  redirectToRespuestaPreguntas(){
    this.router.navigate(['/respuestas-preguntas']);
  }

  data: any[] = [];
  elementosPorPagina = 5;
  paginaActual = 1;

  searchText: any = '';
  filtroSeleccionado: string = '';

  selectAll: boolean = false;

  dataPagina: any[] = [];//datos para la paginacion
  dataCompleta: any[] = [];//datos para la paginacion

  selectedItems: any[] = [];//arreglo que almacena los checkbox seleccionados para redireccionar a la otra pagina

  onPageChange(event: any) {
    this.paginaActual = event; // Actualizar la página actual con el valor proporcionado por el evento
    this.actualizarDatosTabla(); // Método para actualizar los datos de la tabla según la página actual
  }

  cambioPagina(paginaActual: number) {
    this.paginaActual = paginaActual;
    this.actualizarDatosTabla();
  }

  actualizarDatosTabla() {//actualizar cada vez que se haga cambio de pagina en la tabla
    const indiceInicial = (this.paginaActual - 1) * this.elementosPorPagina;
    const indiceFinal = indiceInicial + this.elementosPorPagina;
    this.dataPagina = this.dataCompleta.slice(indiceInicial, indiceFinal);
  }
  
  getSelectedItems() {//checkbox uno por uno
    this.selectedItems = this.data.filter(item => item.selected);
    return this.selectedItems;
  }
  
  redireccionar() {
    const items = this.getSelectedItems();
    this.router.navigate(['/respuestas-preguntas'], { queryParams: { items: JSON.stringify(items) } });
  }  

  toggleSelectAll() {//checkbox selecciona todo
    this.selectAll = !this.selectAll;
    this.data.forEach(item => item.selected = this.selectAll);
  }

  eliminarFilasSeleccionadas() {//Eliminar filas seleccionadas por el checkbox
    this.data = this.data.filter(item => !item.selected);
  }

  ngOnInit() {
    this.preguntasService.getJsonData().subscribe(data => {//mostrar datos en la tabla
      this.data = data;//datos
      this.dataCompleta = data;//datos completos para filtrar
      this.actualizarDatosTabla();//actualizar tabla
    });
  }

  filtrarTabla() {
    if (this.filtroSeleccionado) {
      this.filtrar(this.filtroSeleccionado);
    } else {
      this.dataPagina = [...this.dataCompleta];
      this.actualizarDatosTabla();
    }
  }

  filtrarPorDia() {
    const fechaActual = new Date();
    const fechaInicio = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());
    const fechaFin = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate() + 1);

    this.dataPagina = this.dataCompleta.filter(dato => {
      const fechaDato = new Date(dato.fecha); // Asegúrate de adaptar esto según la estructura de tu objeto JSON
      return fechaDato >= fechaInicio && fechaDato < fechaFin;
    }).sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA.getTime() - fechaB.getTime();
    });

    this.actualizarDatosTabla();
  }

  filtrarPorSemana() {
    const fechaActual = new Date();
    const primerDiaSemana = fechaActual.getDate() - fechaActual.getDay();
    const fechaInicio = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), primerDiaSemana);
    const fechaFin = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), primerDiaSemana + 7);

    this.dataPagina = this.dataCompleta.filter(dato => {
      const fechaDato = new Date(dato.fecha); // Asegúrate de adaptar esto según la estructura de tu objeto JSON
      return fechaDato >= fechaInicio && fechaDato < fechaFin;
    }).sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA.getTime() - fechaB.getTime();
    });

    this.actualizarDatosTabla();
  }

  filtrarPorMes() {
    const fechaActual = new Date();
    const fechaInicio = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    const fechaFin = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0);

    this.dataPagina = this.dataCompleta.filter(dato => {
      const fechaDato = new Date(dato.fecha); // Asegúrate de adaptar esto según la estructura de tu objeto JSON
      return fechaDato >= fechaInicio && fechaDato <= fechaFin;
    }).sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA.getTime() - fechaB.getTime();
    });

    this.actualizarDatosTabla();
  }

  filtrarPorAnio() {
    const fechaActual = new Date();
    const fechaInicio = new Date(fechaActual.getFullYear(), 0, 1);
    const fechaFin = new Date(fechaActual.getFullYear(), 11, 31);

    this.dataPagina = this.dataCompleta.filter(dato => {
      const fechaDato = new Date(dato.fecha); // Asegúrate de adaptar esto según la estructura de tu objeto JSON
      return fechaDato >= fechaInicio && fechaDato <= fechaFin;
    }).sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return fechaA.getTime() - fechaB.getTime();
    });

    this.actualizarDatosTabla();
  }

  filtrar(tipoFiltro: string) {
    if (tipoFiltro === 'dia') {
      this.filtrarPorDia();
    } else if (tipoFiltro === 'semana') {
      this.filtrarPorSemana();
    } else if (tipoFiltro === 'mes') {
      this.filtrarPorMes();
    } else if (tipoFiltro === 'anio') {
      this.filtrarPorAnio();
    }
  }
}
