import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../app/interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private httpClient: HttpClient) {

    //Leer el archivo Json
    this.httpClient.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPagina )=> {
        this.cargada = true;
        this.info = resp;
        console.log(resp.email);
      });
  }
}
