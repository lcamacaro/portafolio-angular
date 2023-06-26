import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {


  constructor(private router: ActivatedRoute,
    private productosService: ProductosService) {

    this.router.params
      .subscribe(parametros => {
        this.productosService.getProducto(parametros['id'])
          .subscribe(producto => {
            console.log(producto);
          });
      });
  }
}
