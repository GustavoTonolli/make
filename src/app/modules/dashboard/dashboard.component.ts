import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  data2: any;
  optionsGraficoDough: any;
  optionsBarLine: any;
  dadosFinanciamento: any;
  proximaRotina: any;

  constructor() {
    this.optionsGraficoDough = {
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            boxWidth: 12
          }
        }
      }
    };

    this.optionsBarLine = {
      plugins: {
        legend: {
          display : false,
          labels: {
            usePointStyle: true,
            boxWidth: 12
          }
        }
      }
    }
  };

  ngOnInit(): void {
    this.carregarDataGraficoDough();
    this.carregarDataGraficoBarLine();
    this.carregarDadosOperacoes();
    this.carregarProximasRotinas();
  }



  carregarDataGraficoDough() {
    this.data = {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [
        {
          data: [300, 50, 100, 10],
          backgroundColor: [
            "#383dae",
            "#d91b5c",
            "#9b51e0",
            "#56ccf2",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
  }
  carregarDataGraficoBarLine() {
    this.data2 = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [{
        type: 'line',
        label: 'A',
          borderColor: '#383dae',
        borderWidth: 0,
        fill: true,
        data: [
          50,
          25,
          12,
          48,
          56,
          76,
          42
        ]
      }, {
        type: 'bar',
        label: 'B',
        backgroundColor: '#383dae',
        data: [
          21,
          84,
          24,
          75,
          37,
          65,
          34
        ],
        borderColor: '#383dae',
        borderWidth: 0
      }, {
        type: 'bar',
        label: 'C',
        backgroundColor: '#ea356b',
        data: [
          41,
          52,
          24,
          74,
          23,
          21,
          32
        ]
      }]
    };
  }

  carregarDadosOperacoes() : void{
    this.dadosFinanciamento = {
      valorFinanciado: "R$ 65.000,00",
      saldoAtual:  "R$ 23.000,00",
      contratosAtivos: 5,
      receitaCompartilhada: "R$ 65.000,00"
    }
  }
  carregarProximasRotinas() : void{
    this.proximaRotina = {
      dataEnvioFaturamento: "10/jan/2022",
      diasEnvioFaturamento: "00",
      dataPagarParcelas:  "20/jan/2022",
      diasPagarParcelas:  "10", 
    }
  }
  
}