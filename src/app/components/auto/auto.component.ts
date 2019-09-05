import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  idSiguiente: number = 1;
  paso1: number = null;
  paso2: number = null;
  paso3: number = null;
  paso4: number = null;
  paso5: number = null;

  constructor() { }

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

  ngOnInit() {
  }

}
