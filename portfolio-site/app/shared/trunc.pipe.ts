import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
    transform(value: string, args: string[]): any {

        let text = value.substring(0, 180) + '...';

        return text;

    }
}