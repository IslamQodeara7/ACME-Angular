import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(arr: any[], keyword: string): any[] {
    return arr.filter((x) => {
      return x.name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

}
