import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";

@Injectable()
export class ItemService {
  private itemRef = this.db.list<Item>('item');

  constructor(private db: AngularFireDatabase) {}

  getItem() {
    return this.itemRef;
  }

  addItem(item: Item) {
    return this.itemRef.push(item);
  }

  updateItem(item: Item) {
    return this.itemRef.update(item.key, item);
  }
}