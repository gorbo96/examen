import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listado Productos', url: '/listado', icon: 'mail' },
    { title: 'Carrito', url: '/carrito', icon: 'paper-plane' },
    { title: 'Ingreso', url: '/crear', icon: 'heart' },    
  ];
  public labels = ['Acerca de'];
  constructor() {}
}
