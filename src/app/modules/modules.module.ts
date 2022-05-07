import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ChartModule } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { ContratosComponent } from './contratos/contratos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 
import { MenuComponent } from '../shared/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser'; 
import { NovaSolicitacaoComponent } from './nova-solicitacao/nova-solicitacao.component';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { CustomCurrencyPipe } from '../shared/pipes/customCurrency.pipe';
 

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        MenuComponent,
        HeaderComponent,
        DashboardComponent,
        ContratosComponent,
        NovaSolicitacaoComponent,
        MeusDadosComponent,
        CustomCurrencyPipe
    ],
    imports: [
        TieredMenuModule,
        ButtonModule,
        PanelMenuModule,
        ChartModule,
        AccordionModule,
        TableModule,
        ToastModule,
        CalendarModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        DialogModule,
        DropdownModule,
        ProgressBarModule,
        InputTextModule,
        RatingModule,
        InputTextareaModule,
        ReactiveFormsModule,
        BrowserModule,         
    ]
})

export class PrimeNgModule { }
