import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CargosService } from '../services/cargos.service';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.css']
})
export class SaldosComponent implements OnInit {
  retiros: any[] = [];
  ingresos: any[] = [];
  movimientos: any[] = [];
  mesSeleccionado: string = 'mayo'; // Cambiar el tipo de FormControl a string

  constructor(private cargosService: CargosService) { }

  ngOnInit(): void {
    this.cargosService.getCargos().subscribe(datos => {
      this.actualizarMovimientos(datos);
    });
  }

  cambiarMes(): void {
    this.cargosService.getCargos().subscribe(datos => {
      console.log(this.mesSeleccionado);
      this.actualizarMovimientos(datos, this.mesSeleccionado);
      
    });
  }

  private actualizarMovimientos(datos: any, mesSeleccionado?: string): void {
    if (datos.retiro && datos.retiro.length > 0) {
      this.retiros = datos.retiro.filter((retiro: { mes: string }) => retiro.mes === (mesSeleccionado || 'mayo'));
    }

    if (datos.ingreso && datos.ingreso.length > 0) {
      this.ingresos = datos.ingreso.filter((ingreso: { mes: string }) => ingreso.mes === (mesSeleccionado || 'mayo'));
    }

    this.movimientos = [
      ...this.retiros.map(retiro => ({ ...retiro, tipo: 'retiro' })),
      ...this.ingresos.map(ingreso => ({ ...ingreso, tipo: 'ingreso' }))
    ].sort((a, b) => new Date(b.fecha_hora || b.fecha).getTime() - new Date(a.fecha_hora || a.fecha).getTime());
  }
}