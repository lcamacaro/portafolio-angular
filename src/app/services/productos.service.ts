import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../app/interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {


    this.http.get('https://angular-html-ce0ae-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {
        this.productos = resp;
        this.cargando = false;
      });
  }


   getProducto(id : string){

     return this.http.get(`https://angular-html-ce0ae-default-rtdb.firebaseio.com/productos/${id}.json`);
     
   }
}