import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banca';
  idSiguiente: number = 1;
  paso1: number = null;
  paso2: number = null;
  paso3: number = null;
  paso4: number = null;
  paso5: number = null;

  promocionSel: number;
  plazoSel: number;
  montoSel: number;

  constructor() { }

  actualizaPromocion(idProm: number, plazo: number, monto: number) {

    this.promocionSel = idProm;
    this.plazoSel = plazo;
    this.montoSel = monto;

  }

  siguiente() {
    ++this.idSiguiente;

    switch (this.idSiguiente){
      case 2:
        this.paso1 = 1;
        break;
      case 3:
        this.paso2 = 1;
        break;
      case 4:
        this.paso3 = 1;
        break;
      case 5:
        this.paso4 = 1;
        break;
    }
  }

  anterior() {
    --this.idSiguiente;

    switch (this.idSiguiente){
      case 1:
        this.paso1 = 0;
        break;
      case 2:
        this.paso2 = 0;
        break;
      case 3:
        this.paso3 = 0;
        break;
      case 4:
        this.paso4 = 0;
        break;
    }

  }
  
}
