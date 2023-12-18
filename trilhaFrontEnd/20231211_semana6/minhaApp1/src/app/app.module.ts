import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AraraComponent } from './arara/arara.component';
import { FormsModule } from '@angular/forms';
import { DestaqueDirective } from './destaque.directive';
import {TresVezesDirective } from './tres-vezes.directive';
import { AnimacaoDirective } from './animacao.directive';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    AraraComponent,
    DestaqueDirective,
    TresVezesDirective,
    AnimacaoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
