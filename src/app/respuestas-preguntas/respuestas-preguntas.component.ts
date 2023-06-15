import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PreguntasServices } from '../services/preguntas.services';

@Component({
  selector: 'app-respuestas-preguntas',
  templateUrl: './respuestas-preguntas.component.html',
  styleUrls: ['./respuestas-preguntas.component.css']
})
export class RespuestasPreguntasComponent implements OnInit {

  constructor(private preguntasService: PreguntasServices, private router: Router, private route: ActivatedRoute) { }

  redirectToRespuestaPreguntas(){
    this.router.navigate(['/preguntas-clientes']);
  }

  data: any[] = [];
  elementosPorPagina = 1;
  paginaActual = 1;

  searchText: any = '';
  filtroSeleccionado: string = '';

  selectAll: boolean = false;

  dataPagina: any[] = [];//datos para la paginacion
  dataCompleta: any[] = [];//datos para la paginacion

  selectedItems: any[] = [];

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
    return this.data.filter(item => item.selected);
  }

  toggleSelectAll() {//checkbox selecciona todo
    this.selectAll = !this.selectAll;
    this.data.forEach(item => item.selected = this.selectAll);
  }

  eliminarFilasSeleccionadas() {//Eliminar filas seleccionadas por el checkbox
    this.data = this.data.filter(item => !item.selected);
  }

  ngOnInit() {
    this.preguntasService.getJsonData().subscribe(data => {
      this.dataCompleta = data;
      this.actualizarDatosTabla();
    });

    this.route.queryParams.subscribe(params => {
      if (params['items']) {
        this.selectedItems = JSON.parse(params['items']);
      }
      this.actualizarDatosTabla();//actualizar tabla
    });
  }

}
