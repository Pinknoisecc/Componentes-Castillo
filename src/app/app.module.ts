import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Solo importa ReactiveFormsModule
import { FormsModule } from '@angular/forms'; // Importa solo FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FormularioComponent } from './components/formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina1Component,
    Pagina2Component,
    NavmenuComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }