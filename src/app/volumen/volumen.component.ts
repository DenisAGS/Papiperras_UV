import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { GraficasService } from '../services/graficas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-volumen',
  templateUrl: './volumen.component.html',
  styleUrls: ['./volumen.component.css']
})
export class VolumenComponent implements OnInit {
  private barChart: Chart | undefined;
  private datos: any;
  chartCanvas: any;
  selectedOption: string = 'anio';
  selectedOption2: string = 'mes';;
  selectedOption3: string = 'dia';;

  constructor(private graficasService: GraficasService) { }

  ngOnInit() {
    this.graficasService.getGraficasData().subscribe(datos => {
      this.datos = datos;
      this.createChart();
    });
  }

  handleDateChange(): void {
    const name = 'barChart'
    console.log("Selected option:", this.selectedOption);
    this.updateChart(this.selectedOption, name);
  }
  handleDateChange2(): void {
    const name = 'barChart2'
    console.log("Selected option:", this.selectedOption2);
    this.updateChart(this.selectedOption2, name);
  }
  handleDateChange3(): void {
    const name = 'barChart3'
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
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const barChart2 = new Chart('barChart2', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Digital Goods',
            backgroundColor: 'rgba(121, 1, 126, 0.5)',
            borderColor: 'rgba(121, 1, 126, 1)',
            pointBackgroundColor :'rgba(121, 1, 126, 1)',
            borderWidth: 1,
            tension: 0.3,
            fill:true,
            data: [28, 48, 40, 19, 86, 27, 90]
          },
          {
            label: 'Digital Goods',
            backgroundColor: 'rgba(255, 201, 148, 0.5)',
            borderColor: 'rgba(255, 201, 148, 1)',
            pointBackgroundColor :'rgba(255, 201, 148, 0.1)',
            borderWidth: 1,
            tension: 0.3,
            fill:true,
            data: [21, 56, 45, 29, 96, 17, 10]
          },
          {
            label: 'Electronics',
            backgroundColor: 'rgba(51, 207, 255, 0.5)',
            borderColor: 'rgba(51, 207, 255, 1)',
            pointBackgroundColor :'rgba(51, 207, 255, 1)',
            borderWidth: 1,
            tension: 0.3,
            fill:true,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }
    });
    
    
    
    const barChart3 = new Chart('barChart3', {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Región Norte',
            data: [120, 180, 150, 200, 160],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
          {
            label: 'Región Sur',
            data: [80, 140, 100, 120, 90],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
            label: 'Región Centro',
            data: [60, 80, 70, 90, 80],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
          },
        },
      },
    });
    
  }

  updateChart(data: string | undefined, name: string): void {
    const chart = Chart.getChart(name);
    let selectedData = this.datos.semana;
    if (data == 'mes') {
      selectedData = this.datos.meses;
    } else if (data == 'anio') {
      selectedData = this.datos.anual
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

