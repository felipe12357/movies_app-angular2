import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Rutas
import {APP_ROUTING} from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { MovieComponent } from './componentes/movie/movie.component';
import { SinFotoPipe } from './pipes/sin-foto.pipe';
import { CaroucelComponent } from './componentes/caroucel/caroucel.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { OrderByCustomPipe } from './pipes/order-by-custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    SinFotoPipe,
    CaroucelComponent,
    BuscadorComponent,
    OrderByCustomPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
