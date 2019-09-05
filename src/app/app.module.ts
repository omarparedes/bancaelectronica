import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DatosGeneralesComponent } from './components/datos-generales/datos-generales.component';
import { PercepcionesComponent } from './components/percepciones/percepciones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { QuitarPagarComponent } from './components/quitar-pagar/quitar-pagar.component';
import { ReferenciasComponent } from './components/referencias/referencias.component';
import { AutoComponent } from './components/auto/auto.component';
import { HipotecarioComponent } from './components/hipotecario/hipotecario.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DatosGeneralesComponent,
    PercepcionesComponent,
    PromocionesComponent,
    QuitarPagarComponent,
    ReferenciasComponent,
    AutoComponent,
    HipotecarioComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
