import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../models/gender';

@Pipe({
  name: 'genderToString',
})
export class GenderToStringPipe implements PipeTransform {

  transform(value: number, ...enumType: any): string {
    return Gender[value];
  }

}
