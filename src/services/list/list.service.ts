import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { List } from "../../models/list/list.model";

@Injectable()
export class ListService {
  private listRef = this.db.list<List>('list');

  constructor(private db: AngularFireDatabase) {}

  getList() {
    return this.listRef;
  }

  getListByKey(key) {
    return this.db.list<List>(`list/${key}`);
  }

  addList(list: List) {
    return this.listRef.push(list);
  }

  updateList(list: List) {
    return this.listRef.update(list.key, list);
  }
}