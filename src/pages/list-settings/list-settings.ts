import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from '../../models/list/list.model';
import { AppPreferences } from '@ionic-native/app-preferences';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private appPref: AppPreferences) {
    this.list = this.navParams.get('list');

    appPref.fetch('list', 'hideCheckedItems').then(value => {
      console.log(value);
    });
  }

  saveSettings() {
    this.appPref.store('list', 'hideCheckedItems', this.hideCheckedItems).then(value => {
      console.log('stored something', value);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSettingsPage');
  }
}
