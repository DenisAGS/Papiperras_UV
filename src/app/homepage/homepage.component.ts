import { Component, OnInit } from '@angular/core';
import { ProblemasServices } from '../services/problemas.service';
import { PreguntasService } from '../services/preguntas.service';
import { MovimientosService } from '../services/movimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  datosPreguntas: any[] | undefined;
  datosVentas: any[] | undefined;
  ultimaSesion: string = '';
  reclamos: number = 0;
  ventas: number = 0;
  
  constructor(private movimientosService: MovimientosService, private preguntasService: PreguntasService, private router: Router) {
    this.movimientosService.getCargos().subscribe(datos => {
      this.datosVentas = datos;
      console.log(this.datosVentas)
    });
    this.preguntasService.getPreguntas().subscribe(datos => {
      this.datosPreguntas = datos;
    });
  }
  redirectToOpinion(): void {
    this.router.navigate(['/calendario']); // Reemplaza '/preguntas' por la ruta correspondiente al componente de preguntas
  }
  redirectToPreguntas(): void {
    this.router.navigate(['/preguntas-clientes']); // Reemplaza '/preguntas' por la ruta correspondiente al componente de preguntas
  }
  redirectToVentas(): void {
    this.router.navigate(['/calendario']); // Reemplaza '/preguntas' por la ruta correspondiente al componente de preguntas
  }
  ngOnInit(): void {
    // Simular datos recibidos
    this.ultimaSesion = 'hace 4 horas';
    this.reclamos = 2;
    this.ventas = 20;
  }
}
