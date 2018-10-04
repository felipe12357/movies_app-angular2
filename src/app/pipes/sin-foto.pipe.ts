import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinFoto'
})
//No se implementó
export class SinFotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   
    console.log("llega");
    console.log(value);
    return value;
  }

}
