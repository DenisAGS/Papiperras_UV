import { Component, OnInit } from '@angular/core';
import { ProblemasServices } from '../services/problemas.service';
import { PreguntasService } from '../services/preguntas.service';
import { MovimientosService } from '../services/movimientos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  datosPreguntas: any[] | undefined;
  datosVentas: any[] | undefined;
  
  constructor(private movimientosService: MovimientosService, private preguntasService: PreguntasService) {
    this.movimientosService.getCargos().subscribe(datos => {
      this.datosVentas = datos;
      console.log(this.datosVentas)
    });
    this.preguntasService.getPreguntas().subscribe(datos => {
      this.datosPreguntas = datos;
    });
  }

  ngOnInit(): void {
  }

}
