import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../servicios/moviedb.service';
//import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topPopulares:any[];
  cartelera:any[];
  infantiles:any[];
  calificadas:any[];
 
  constructor(public _moviedbService: MoviedbService) { }
  
  ngOnInit() {
    this._moviedbService.consultarPopulares()
    .subscribe(results=>{
      this.topPopulares=results;
    });

    this._moviedbService.consultarCartelera()
    .subscribe(results=>{
      this.cartelera=results;
      //console.log(this.cartelera);
    });

    this._moviedbService.consultarInfantiles()
    .subscribe(results=>{
      this.infantiles=results;
    });

    this._moviedbService.consultarCalificadas()
    .subscribe(results=>{
      this.calificadas=results;
    });
  }

}
