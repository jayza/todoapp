import { Item } from '../item/item.model';
import { ListSettings } from './list-settings.model';

export interface List {
    key?: string;
    name: string;
    items: Array<Item>;
    settings?: ListSettings;
}