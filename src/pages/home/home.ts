import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ListService } from '../../services/list/list.service';
import { Observable } from 'rxjs/Observable';
import { List } from '../../models/list/list.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list$: Observable<List[]>;

  constructor(public navCtrl: NavController, public listService: ListService) {
    this.list$ = this.listService
      .getList()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }

  openList(list) {
    this.navCtrl.push('ListPage', { list: list });
  }

}
