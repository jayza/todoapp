import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the HideDeletedItemsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'hideDeletedItems',
})
export class HideDeletedItemsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: Item[], ...args) {
    return items.filter(item => {
      return !item.deleted;
    });
  }
}
