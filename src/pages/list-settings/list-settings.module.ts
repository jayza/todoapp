import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSettingsPage } from './list-settings';

@NgModule({
  declarations: [
    ListSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSettingsPage),
  ],
})
export class ListSettingsPageModule {}
