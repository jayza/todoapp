import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the HideCheckedItemsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'hideCheckedItems',
})
export class HideCheckedItemsPipe implements PipeTransform {
  transform(items: Item[], hideCheckedItems, ...args) {
    return items.filter(item => {
      return (hideCheckedItems) ? !item.checked : true;
    });
  }
}
