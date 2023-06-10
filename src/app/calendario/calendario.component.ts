import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { CargosService } from '../services/cargos.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  retiroEventos: any[] = [];
  ingresoEventos: any[] = [];

  calendarOptions: CalendarOptions = {
    height: '550px',
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    locale: esLocale,
    events: [],
    // ... más opciones aquí
  };

  constructor(private cargosService: CargosService) {}

  ngOnInit(): void {
    this.getCargos();
  }

  getCargos(): void {
    this.cargosService.getCargos().subscribe((data) => {
      this.retiroEventos = data.retiro.map((retiro: any) => ({
        title: `Retiro - $ ${retiro.monto}`,
        date: retiro.fecha_hora.split(' ')[0], // Eliminar la hora de la fecha
        color: 'coral', // Rojo pastel
      }));

      this.ingresoEventos = data.ingreso.map((ingreso: any) => ({
        title: `Ingreso - $ ${ingreso.monto}`,
        date: ingreso.fecha,
        color: 'lightgreen', // Verde pastel
      }));

      this.calendarOptions.events = [...this.retiroEventos, ...this.ingresoEventos];
    });
  }
}
