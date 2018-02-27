import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { ListService } from '../../services/list/list.service';

import { List } from '../../models/list/list.model';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @ViewChild('addItemInput') addItemInput;

  list: List;
  subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService, public modalCtrl: ModalController) {
    this.list = this.navParams.get('list');

    this.subscription = this.listService
      .getListByKey(this.list.key)
      .snapshotChanges()
      .subscribe(changes => {
        changes.forEach(val => {
          this.list[val.key] = val.payload.val();
        });
      });

  }

  hideCheckedItems(item: Item) {
    return !item.checked;
  }

  // Remove subscriptions.
  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  checkItem(item) {
    let index = this.list.items.indexOf(item);
    this.list.items[index].checked = !this.list.items[index].checked;

    this.listService.updateList(this.list);
  }

  addItem() {
    if (this.addItemInput.value.length) {
      if (this.list.items == undefined) {
        this.list.items = [];
      }

      let key = this.list.items.length + 1;
      let item = { key: key.toString(), name: this.addItemInput.value, checked: false };
      this.list.items.push(item);
      this.addItemInput.clearTextInput();
      this.addItemInput.setFocus();

      this.listService.updateList(this.list);
    }
  }

  removeItem(item) {
    let index = this.list.items.indexOf(item);
    this.list.items.splice(index, 1);

    this.listService.updateList(this.list);
  }

  openSettings() {
    this.navCtrl.push('ListSettingsPage', { list: this.list });
  }
}