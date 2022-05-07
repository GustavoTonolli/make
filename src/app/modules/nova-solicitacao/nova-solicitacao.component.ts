import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novasolicitacao',
  templateUrl: './nova-solicitacao.component.html',
  styleUrls: ['./nova-solicitacao.component.css']
})
export class NovaSolicitacaoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
  }

  novaSolicitacaoForm = this.formBuilder.group({
    valorFinanciamento: [null, [Validators.required]],
    observacao: ''    
  });
  get valorFinanciamento() { return this.novaSolicitacaoForm.get('valorFinanciamento'); }

  enviarNovaSolicitacao(): void {
    debugger;
    console.log(this.novaSolicitacaoForm.value.valorFinanciamento + " " + this.novaSolicitacaoForm.value.observacao);
  }

}
