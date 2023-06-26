import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Productos } from '../app/interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos[] = [];

  constructor(private http: HttpClient) {


    this.cargarProductos();

  }

  private cargarProductos() {

 
    this.http.get('https://angular-html-ce0ae-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: any) => {

          console.log(resp);
          this.productos = resp;
          this.cargando = false;

        });


  }
}