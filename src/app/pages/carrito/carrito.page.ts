import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/services/listado.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/domain/producto';
import { LlamadasService } from 'src/app/services/llamadas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carrito:any

  constructor(private router: Router,
    private productoService: ListadoService,
    private llamadasService: LlamadasService,
    public afs: AngularFirestore) { }

  ngOnInit() {
    this.carrito=this.productoService.getCarrito();
  }
  quitarcarrito(producto:Producto){
    this.productoService.delete(producto);
  }
  llamar(){
    this.llamadasService.llamar()
  }

}
