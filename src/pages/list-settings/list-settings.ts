import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from '../../models/list/list.model';
import { Config } from 'ionic-angular/config/config';

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
  
  hideCheckedItems: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public config: Config) {
    this.list = this.navParams.get('list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSettingsPage');
  }
}
