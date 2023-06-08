import { Component, OnInit } from '@angular/core';
import { ProblemasServices } from '../services/problemas.services.ts.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  jsonData: any;

  constructor(private jsonService: ProblemasServices) {}

  ngOnInit() {
    this.getJsonData();
  }

  getJsonData() {
    this.jsonService.getJsonData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }

  saveJsonData() {
    this.jsonService.saveJsonData(this.jsonData).subscribe(response => {
      // Aquí puedes realizar cualquier acción después de guardar los datos
    });
  }

}

