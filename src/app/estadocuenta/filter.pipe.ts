import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], filtro: string): any[] {
    if (!filtro) {
      return data;
    }
    
    filtro = filtro.toLowerCase();

    return data.filter(item => {
      return item[1].toLowerCase().includes(filtro);
      
    });
  }
}
