import { Component } from '@angular/core';
import { LocalizacaoComponent } from '../localizacao/localizacao.component';
import { InfoGeralComponent } from '../info-geral/info-geral.component';
import { EventosComponent } from '../eventos/eventos.component';
import { FinanceiroComponent } from '../financeiro/financeiro.component';

@Component({
  selector: 'app-descricao',
  standalone: true,
  imports: [
    LocalizacaoComponent, 
    InfoGeralComponent,
    EventosComponent,
    FinanceiroComponent
  ],
  templateUrl: './descricao.component.html',
  styleUrl: './descricao.component.scss'
})
export class DescricaoComponent {

}
