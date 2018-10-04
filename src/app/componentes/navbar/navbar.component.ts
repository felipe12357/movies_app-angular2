import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  inputBuscar2:string;

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  buscarPelicula(digitado:string){
    this._router.navigate(['/buscador',digitado]);
    //console.log("llego"+digitado); //lo digitado por medio de la etiqueta #
    //console.log(this.inputBuscar2); //lo digitado por medio del ngmodel
  }
}
