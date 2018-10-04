import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByCustom'
})
export class OrderByCustomPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(value:any, atributos: string): Array<string> {
      if(value!=undefined){
        let atributoss=atributos.split(",");
        let field=atributoss[0];
        //console.log(value);

        let array=value;
        if(atributoss[1]=='desc'){
          array.sort((a: any, b: any) => {
            //modificando los simbolos > <
            //puedo colocarlo como ascendete o descendente
            if (a[field] > b[field]) {
              return -1;
            } else if (a[field] < b[field]) {
              return 1;
            } else {
              return 0;
            }
          });
          return array;
        }
        if(atributoss[1]=='asc'){
          array.sort((a: any, b: any) => {
            //modificando los simbolos > <
            //puedo colocarlo como ascendete o descendente
            if (a[field] < b[field]) {
              return -1;
            } else if (a[field] > b[field]) {
              return 1;
            } else {
              return 0;
            }
          });
          return array;
        }

      }else
        return value;
  }

}
