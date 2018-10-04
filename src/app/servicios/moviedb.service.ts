import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  apiKey:string="9546141129cea9b3ed851874fe27f19b";
  url:string="https://api.themoviedb.org/3";
 
  constructor(private http:HttpClient ) {
    
   }
  consultarXid(id) {
    const consulta=this.http.get(this.url+"/movie/"+id+"?language=es-MX&api_key="+this.apiKey);
    return consulta;
  }
  consultarPopulares(){
    return this.http.get(this.url+"/discover/movie?sort_by=popularity.desc&language=es-MX&api_key="+this.apiKey)
    .pipe(map((respuesta:any)=> respuesta.results) )
  }

  consultarCartelera(){
    let fechaActual=new Date();
    let fechaInicial=new Date();
    //Resta 20 dias a la fecha inicial para consultar cartelera
    fechaInicial.setDate(fechaInicial.getDate()-20);

    let fechaActualF=fechaActual.toISOString().slice(0,10);
    let fechaInicialF=fechaInicial.toISOString().slice(0,10);
   
    return this.http.get(this.url+"/discover/movie?primary_release_date.gte="+fechaInicialF+"&primary_release_date.lte="+fechaActualF+"&language=es-MX&api_key="+this.apiKey)
    .pipe(map((respuesta:any)=> respuesta.results) )
  }

  consultarInfantiles(){
    return this.http.get(this.url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&language=es-MX&api_key="+this.apiKey)
    .pipe(map((respuesta:any)=> respuesta.results) )
  }

  consultarCalificadas(){
    return this.http.get(this.url+"/discover/movie?certification_country=US&sort_by=vote_average.desc&language=es-MX&api_key="+this.apiKey)
    .pipe(map((respuesta:any)=> respuesta.results) )
  }

  buscarPeliculas(termino){
    return this.http.get(this.url+"/search/movie?query='"+termino+"'&language=es&api_key="+this.apiKey)
    .pipe(map((respuesta:any)=> respuesta.results) )
  }
}
