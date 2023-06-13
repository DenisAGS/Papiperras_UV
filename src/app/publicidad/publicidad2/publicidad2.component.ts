import { Component, OnInit } from '@angular/core';
import { Campania } from './publicidad2.interface';
import { v4 as uuidv4 } from 'uuid';
import * as campaniasJson from 'src/assets/json/campaniasJson.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicidad2',
  templateUrl: './publicidad2.component.html',
  styleUrls: ['./publicidad2.component.css']
})
export class Publicidad2Component implements OnInit {
  id: string = uuidv4();
  nombre: string = '';
  presupuestoDiario: number = 0;
  estado!: boolean;
  campanias: Campania[] = [];
  campania: Campania = {
    id: '',
    nombre: '',
    presupuestoDiario: 0,
    estado: true,
    impresiones: null,
    clics: null,
    ingresos: null,
    inversion: null,
    ventas: null,
    ingresosinversion: null,
    productos: []
  }
  imprimirCampania() {
    for (let i = 0; i < this.campanias.length; i++) {
      const campania = this.campanias[i];
      console.log(`Campaña`, campania.id);
      console.log('Nombre Campaña:', campania.nombre);
      console.log('Presupuesto diario:', campania.presupuestoDiario);
      console.log('------------------------------');
    }
  }
  agregarCampania() {
    const campanias = (campaniasJson as any).default;
    campanias.push(this.campania);
    this.campania = {
      id: '',
      nombre: '',
      presupuestoDiario: 0,
      estado: true,
      impresiones: null,
      clics: null,
      ingresos: null,
      inversion: null,
      ventas: null,
      ingresosinversion: null,
      productos: []
    };
    console.log(campanias);  
    
  }

  enviarCampania(): void {
    const campania = {
      id:this.id,
      nombre: this.nombre,
      presupuestoDiario: this.presupuestoDiario,
      estado:this.estado
    };
  
    this.router.navigate(['/metricas'], { state: { campania } });
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
