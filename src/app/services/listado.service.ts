import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(public afs: AngularFirestore) { }

  getProductos():Observable<any[]>{
    return this.afs.collection("Productos",
            ref=> ref.where("activo","==",true)).valueChanges();
  }
  getCarrito():Observable<any[]>{
    return this.afs.collection("Carrito",
            ref=> ref.where("activo","==",true)).valueChanges();
  }
  save(producto:Producto){
    const refProducto = this.afs.collection("Carrito"); //Adentro de los parentecis hacemos una referencia a la coleccion que queremos
                                 //Si no existe la coleccion se crea de manera automatica
    if (producto.uid == null){
      producto.uid = this.afs.createId(); // esta linea es para crear el id      
    }
    refProducto.doc(producto.uid).set(Object.assign({}, producto));
  }
  delete(producto:Producto){
    producto.activo=false
    this.save(producto)
  }
}
