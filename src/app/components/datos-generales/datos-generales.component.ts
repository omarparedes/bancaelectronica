import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CpService } from '../../services/cp.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {

  cpData: any;
  estado: any = '';
  municipio: any = '';
  colonias: any = '';
  cpCliente: any = '';
  calleCliente: any = '';
  extCliente: any = '';
  intCliente: any = '';
  estadoCliente: any = '';
  municipioCliente: any = '';
  coloniaCliente: any = '';

  datosCliente: any;
  nombreCliente: string = "";
  matriculaCliente: string = "";
  rfcCliente: string = "";
  curpCliente: string = "";
  cuentaPQCliente: string = "";
  idPerCliente: string = "";

  constructor(private http: HttpClient, private cpService: CpService) {
  }

  async getCP(cp: any) {

    this.cpData = await this.cpService.getCPData(cp);

    this.cpData.subscribe(data => { 
      this.estado = data.estado;
      this.municipio = data.municipio;
      this.colonias = data.colonias;
    });

  }

  getDatos() {

    this.http.get('assets/json/datos-cliente.json')
    .subscribe(data => {

      this.datosCliente = data;
      
      this.nombreCliente = this.datosCliente.nombre;
      this.matriculaCliente = this.datosCliente.matricula;
      this.curpCliente = this.datosCliente.curp;
      this.idPerCliente = this.datosCliente.idPer;
      this.rfcCliente = this.datosCliente.rfc;
      this.cuentaPQCliente = this.datosCliente.cuentaPQ;

      this.calleCliente = this.datosCliente.calle;
      this.extCliente = this.datosCliente.noExt;
      this.intCliente = this.datosCliente.noInt;
      this.cpCliente = this.datosCliente.cp;

      this.getCP(this.cpCliente);

    });

  }

  ngOnInit() {

    this.getDatos();

  }

}
