import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../servicios/moviedb.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  movies:any[];
  busqueda:string;
  constructor(public _moviedbService: MoviedbService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params=>{
      this.busqueda=params['termino'];
      this._moviedbService.buscarPeliculas(params['termino'])
      .subscribe(result=>{
        this.movies=result;
        //console.log(this.movie);
      });
    })
  }

}
