import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../servicios/moviedb.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:{};
  rutaPrevia:string;
  constructor(public _moviedbService: MoviedbService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(params=>{
      console.log(params);
      this._moviedbService.consultarXid(params['id'])
      .subscribe(result=>{
        this.movie=result;
       // console.log(this.movie);
      });
      this.rutaPrevia=params['pagina'];

    })
  }

}
