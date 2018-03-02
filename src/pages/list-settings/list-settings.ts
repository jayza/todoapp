import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from '../../models/list/list.model';
import { ListSettings } from '../../models/list/list-settings.model';
import { ListService } from '../../services/list/list.service';

/**
 * Generated class for the ListSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-settings',
  templateUrl: 'list-settings.html',
})
export class ListSettingsPage {

  list: List;

  newValues: boolean = false;

  settings: ListSettings = {
    hideCheckedItems: false
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    this.list = this.navParams.get('list');
    this.settings = JSON.parse(JSON.stringify(this.list.settings));
  }

  newValuesToBeChanged(key) {
    this.newValues = (this.list.settings[key] == this.settings[key]) ? false : true;
  }

  saveSettings() {
    this.list.settings = this.settings;
    this.listService.updateList(this.list);
    this.newValues = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSettingsPage');
  }
}
