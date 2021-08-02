import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/services/listado.service';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/domain/producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  productos:any
  

  constructor(private router: Router,
    private productoService: ListadoService,
    public afs: AngularFirestore) { }

  ngOnInit() {
    this.productos= this.productoService.getProductos();
  }
  carrito(producto:Producto){
    
    this.productoService.save(producto);
  }

}
