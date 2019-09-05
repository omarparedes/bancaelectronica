import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  promocionesDatos: any;
  promocionesCliente: any;
  plazosDatos: any;
  plazosClientes: any;
  montoSel: number;
  promSel: number;
  plazoSel: number;

  constructor(private http: HttpClient, private appComponent: AppComponent) { }

  getPromotions() {

    this.http.get('assets/json/datos-cliente.json')
    .subscribe(data => {

      this.promocionesDatos = data;

      this.promocionesCliente = this.promocionesDatos.promociones;

    });

  }

  showTerms(idPromotion: string) {

    this.plazosDatos = this.promocionesCliente.filter(promocion => {
      return promocion.idPromocion === idPromotion;
    });

    this.plazosClientes = (this.plazosDatos[0].plazos).split(',');

  }
  
  guardaProm(promSel: number, plazoSel: number, monto: number) {

    this.appComponent.actualizaPromocion(promSel, plazoSel, monto);

  }

  ngOnInit() {

    this.getPromotions();

    this.montoSel = this.appComponent.montoSel;
    this.promSel = this.appComponent.promocionSel;
    this.plazoSel = this.appComponent.plazoSel;

  }

}
