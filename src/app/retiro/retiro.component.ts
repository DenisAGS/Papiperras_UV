import { Component, OnInit } from '@angular/core';
import { CargosService } from '../services/cargos.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  retiros: any[] = [];
  ingresos: any[] = [];
  movimientos: any[] = [];
  saldo: number| undefined;
  constructor(private cargosService: CargosService) { }

  ngOnInit(): void {
    this.cargosService.getCargos().subscribe(datos => {
      this.saldo = datos.disponible[0].saldo;

      if (datos.retiro && datos.retiro.length > 0) {
        this.retiros = datos.retiro.sort((a: { fecha: string | number | Date; }, b: { fecha: string | number | Date; }) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      }

      if (datos.ingreso && datos.ingreso.length > 0) {
        this.ingresos = datos.ingreso.sort((a: { fecha_hora: string | number | Date; }, b: { fecha_hora: string | number | Date; }) => new Date(b.fecha_hora).getTime() - new Date(a.fecha_hora).getTime());
      }

      this.movimientos = [...this.retiros.map(retiro => ({ ...retiro, tipo: 'retiro' })), ...this.ingresos.map(ingreso => ({ ...ingreso, tipo: 'ingreso' }))].sort((a, b) => new Date(b.fecha || b.fecha_hora).getTime() - new Date(a.fecha || a.fecha_hora).getTime());

      console.log(this.saldo);
    });
  }
}
