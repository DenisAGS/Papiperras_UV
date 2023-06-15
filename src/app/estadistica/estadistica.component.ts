import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { GraficasService } from '../services/graficas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  private barChart: Chart | undefined;
  private datos: any;
  chartCanvas: any;
  selectedOption: string = 'anio';
  selectedOption2: string = 'mes';;
  selectedOption3: string  = 'dia';;

  constructor(private graficasService: GraficasService) { }

  ngOnInit() {
    this.graficasService.getGraficasData().subscribe(datos => {
      this.datos = datos;
      this.createChart();
    });
  }

  handleDateChange(): void {
    const name='barChart'
    console.log("Selected option:", this.selectedOption);
    this.updateChart(this.selectedOption, name);
  }
  handleDateChange2(): void {
    const name='barChart2'
    console.log("Selected option:", this.selectedOption2);
    this.updateChart(this.selectedOption2, name);
  }
  handleDateChange3(): void {
    const name='barChart3'
    console.log("Selected option:", this.selectedOption3);
    this.updateChart(this.selectedOption3, name);
  }

  createChart() {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.datos.anual.labels,
        datasets: [{
          label: 'Monto',
          data: this.datos.anual.volumen,
          backgroundColor: this.datos.anual.backgroundColor,
          borderColor: this.datos.anual.borderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const barChart2 = new Chart('barChart2', {
      type: 'bar',
      data: {
        labels: this.datos.meses.labels,
        datasets: [{
          label: 'Unidades',
          data: this.datos.meses.cantidad,
          backgroundColor: this.datos.meses.backgroundColor,
          borderColor: this.datos.meses.borderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const barChart3 = new Chart('barChart3', {
      type: 'bar',
      data: {
        labels: this.datos.semana.labels,
        datasets: [{
          label: 'Ticket Promedio',
          data: this.datos.semana.ticketPromedio,
          backgroundColor: this.datos.semana.backgroundColor,
          borderColor: this.datos.semana.borderColor,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  }

  updateChart(data: string | undefined, name: string) {
    const chart = Chart.getChart(name);
    let selectedData = this.datos.semana;
    if(data=='mes'){
      selectedData=this.datos.meses;
    }else if (data=='anio'){
      selectedData=this.datos.anual
    }
    console.log(selectedData, name);
    if (chart) {
      chart.data.labels = selectedData.labels;
      chart.data.datasets[0].data = selectedData.volumen;
      chart.data.datasets[0].backgroundColor = selectedData.backgroundColor;
      chart.data.datasets[0].borderColor = selectedData.borderColor;

      chart.update();
    }
  }

}
