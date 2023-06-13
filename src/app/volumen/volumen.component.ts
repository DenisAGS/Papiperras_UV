import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { FormsModule } from '@angular/forms';
import { VolumenService } from '../services/volumen.service';

@Component({
  selector: 'app-volumen',
  templateUrl: './volumen.component.html',
  styleUrls: ['./volumen.component.css']
})
export class VolumenComponent implements OnInit {
  private barChart: Chart | undefined;
  private datos: any;
  chartCanvas: any;
  selectedOption: string = 'dia';
  selectedOption2: string = 'dia';;
  selectedOption3: string = 'dia';;

  constructor(private volumenService: VolumenService) { }

  ngOnInit() {
    this.volumenService.getVolumen().subscribe(datos => {
      this.datos = datos;
      console.log(this.datos.categorias.semana.labels),
        this.createChart();
    });
  }

  handleDateChange(): void {
    const name = 'barChart'
    console.log("Selected option:", this.selectedOption);
    this.updateBarChart(this.selectedOption, name);
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
        labels: this.datos.categorias.semana.labels,
        datasets: [{
          label: 'Monto',
          data: this.datos.categorias.semana.volumentotal,
          backgroundColor: ['purple', 'cyan'],
          borderColor: ['purple', 'cyan'],
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
    const datasets2 = []
    const categorias = this.datos.area.semana.categorias;
    const nombresCategorias = Object.keys(categorias);
    for (let i = 0; i < this.datos.area.semana.labels.length; i++) {
      const color = this.getRandomColor(i);
      const dataset = {
        label: nombresCategorias[i],
        backgroundColor: color,
        borderColor: color,
        pointBackgroundColor: color,
        borderWidth: 1,
        tension: 0.3,
        fill: true,
        data: categorias[nombresCategorias[i]].volumen
      };
      datasets2.push(dataset);
    };
    console.log(datasets2);

    const barChart2 = new Chart('barChart2', {
      type: 'line',
      data: {
        labels: this.datos.area.semana.labels,
        datasets: datasets2,
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
        labels: this.datos.area.semana.labels,
        datasets: datasets2,
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

  updateBarChart(data: string | undefined, name: string): void {
    const chart = Chart.getChart(name);
    let selectedData = this.datos.categorias.semana;
    if (data == 'mes') {
      selectedData = this.datos.categorias.mensual;
    } else if (data == 'anio') {
      selectedData = this.datos.categorias.anual
    }
    if (chart) {
      chart.data.labels = selectedData.labels;
      chart.data.datasets[0].data = selectedData.volumentotal;
      chart.update();
    }
  }
  updateChart(data: string | undefined, name: string): void {
    const chart = Chart.getChart(name);
    let selectedData = this.datos.area.semana;
    if (data == 'mes') {
      selectedData = this.datos.area.mensual;
    } else if (data == 'anio') {
      selectedData = this.datos.area.anual
    }
    const datasets2 = []
    const categorias = selectedData.categorias;
    const nombresCategorias = Object.keys(categorias);
    for (let i = 0; i < nombresCategorias.length; i++) {
      const color = this.getRandomColor(i);
      const dataset = {
        label: nombresCategorias[i],
        backgroundColor: color,
        borderColor: color,
        pointBackgroundColor: color,
        borderWidth: 1,
        tension: 0.3,
        fill: true,
        data: categorias[nombresCategorias[i]].volumen
      };
      datasets2.push(dataset);
    };
    if (chart) {
      chart.data.labels = selectedData.labels;
      chart.data.datasets = datasets2;
      chart.update();
    }
  }

  getRandomColor(i: number): string {
    let colorIndex = i % 8;

    switch (colorIndex) {
      case 0:
        return 'rgb(128, 0, 128, 0.2)';   // Púrpura
      case 1:
        return 'rgb(0, 0, 128, 0.2)';     // Azul
      case 2:
        return 'rgb(128, 0, 0, 0.2)';     // Rojo
      case 3:
        return 'rgb(128, 128, 0, 0.2)';   // Amarillo
      case 4:
        return 'rgb(0, 128, 0, 0.2)';     // Verde
      case 5:
        return 'rgb(0, 128, 128, 0.2)';   // Cian
      case 6:
        return 'rgb(128, 128, 128, 0.2)'; // Gris
      default:
        return 'rgb(0, 0, 0)';       // Negro por defecto
    }
  }

}

