import { Component, OnInit } from '@angular/core';
import { CargosService } from 'src/app/services/cargos.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  cargos: any[] = [];

  constructor(private cargosService: CargosService) { }
  monthControl = new FormControl(); // Puedes agregar un valor inicial aquí si es necesario

  ngOnInit(): void {
    this.getCargos();
  }

  getCargos(): void {
    this.cargosService.getCargos()
      .subscribe(data => {
        this.cargos = data;
        console.log('Datos de los cargos:', this.cargos); // Imprimir en consola
      });
  }
}
