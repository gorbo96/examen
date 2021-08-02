import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/producto';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  prodcuto:Producto= new Producto();
  constructor() { }

  ngOnInit() {
  }

  

}
