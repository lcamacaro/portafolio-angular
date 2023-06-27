import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[]= [];

  constructor(private httpClient: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }

      private cargarInfo(){
        //Leer el archivo Json
        this.httpClient.get('assets/data/data-page.json')
        .subscribe( (resp: InfoPagina )=> {
          this.cargada = true;
          this.info = resp;
        });
      }

      
      private cargarEquipo(){

        this.httpClient.get('https://angular-html-ce0ae-default-rtdb.firebaseio.com/equipo.json')
        .subscribe( (resp : any)=> {
          this.equipo= resp;
        });
      
      }
  }

