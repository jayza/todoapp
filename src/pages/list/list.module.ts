import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ListPage } from './list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ListPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
    PipesModule
  ]
})
export class ListModule {}