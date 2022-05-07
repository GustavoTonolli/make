import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  listaContratos: any;
  listaPagamentos: any;
  operacaoContrato: any;

  constructor() { }

  ngOnInit(): void {
    this.carregarContratos();
    this.carregarDadosPagamentos();
    this.carregarDadosOperacaoContrato();
  }

  displayModal: boolean = false;
  iconeExpande: string = "pi pi-chevron-down";
  iconeFecha: string = "pi pi-chevron-up";

  carregarContratos(): any {
    this.listaContratos = [
      {
        id: 1,
        codigoContrato: "A234234-235",
        dataEmissao: "08/01/2022",
        valor: "1.000,00",
        taxaJuros: "2.23",
        tac: "2.23",
        iof: "1.350,00",
        revenueShare: "5",
        saldoAberto: "500,00",
        detalhes: [
          {
            valorBrutoFinanciamento: "500,00",
            pagamentosRealizado: "500,00",
            jurosQuitados: "500,00",
            amortizado: "500,00",
            saldoPrincipalAberto: "500,00",
            saldoJurosAberto: "500,00"
          }
        ]
      },
      {
        id: 2,
        codigoContrato: "A234234-236",
        dataEmissao: "08/02/2022",
        valor: "1.000,00",
        taxaJuros: "2.23",
        tac: "2.23",
        iof: "1.350,00",
        revenueShare: "5",
        saldoAberto: "500,00",
        detalhes: [
          {
            valorBrutoFinanciamento: "500,00",
            pagamentosRealizado: "500,00",
            jurosQuitados: "500,00",
            amortizado: "500,00",
            saldoPrincipalAberto: "500,00",
            saldoJurosAberto: "500,00"
          }
        ]
      },
      {
        id: 3,
        codigoContrato: "A234234-237",
        dataEmissao: "08/03/2022",
        valor: "1.000,00",
        taxaJuros: "2.23",
        tac: "2.23",
        iof: "1.350,00",
        revenueShare: "5",
        saldoAberto: "500,00",
        detalhes: [
          {
            valorBrutoFinanciamento: "500,00",
            pagamentosRealizado: "500,00",
            jurosQuitados: "500,00",
            amortizado: "500,00",
            saldoPrincipalAberto: "500,00",
            saldoJurosAberto: "500,00"
          }
        ]
      },
    ]
  };
  carregarDadosPagamentos(): any {
    this.listaPagamentos = [
      {
        codigoPagamento: 1,
        pagamento: "Pagamento 1",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 2,
        pagamento: "Pagamento 2",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 3,
        pagamento: "Pagamento 3",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 4,
        pagamento: "Pagamento 4",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 5,
        pagamento: "Pagamento 5",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 6,
        pagamento: "Pagamento 6",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 7,
        pagamento: "Pagamento 7",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 8,
        pagamento: "Pagamento 8",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 9,
        pagamento: "Pagamento 9",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 10,
        pagamento: "Pagamento 10",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 11,
        pagamento: "Pagamento 11",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 12,
        pagamento: "Pagamento 12",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      },
      {
        codigoPagamento: 13,
        pagamento: "Pagamento 13",
        tipo: "Pagamento",
        data: "20/01/2022",
        valor: "R$ 6.100,00",
        saldoAberto: "R$ 32.000,00",
        jurosQuitados: "R$750,00",
        amortizacaoRealizada: "R$ 5.900,00",
        saldoAposPagamento: "R$ 25.900,00",
        saldoJurosAberto: "R$ 0,00",
        saldoPrincipalAberto: "R$ 48.900,00",
      }
    ]
  }

  carregarDadosOperacaoContrato() : void{
    this.operacaoContrato = {
      totalContratos: 23243434,
      contratosVigentes: 353535353,
      saldoAtual: "R$ 55656.5555556,00",
      receitaCompartilhada: "R$ 55656.5555556,00"
    }
  }

  showModalDialog() {
    this.displayModal = true;
  }

}
