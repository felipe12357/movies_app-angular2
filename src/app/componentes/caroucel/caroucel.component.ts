import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-caroucel',
  templateUrl: './caroucel.component.html',
  styleUrls: ['./caroucel.component.css']
})
export class CaroucelComponent implements OnInit {

  @Input() listaPeliculas:any[];
  @Input() titulo:string;
  @Input() clasePrincipal:string;
  
  constructor() { }

  ngOnInit() {

  }


}
