import { NgModule } from '@angular/core';
import { HideCheckedItemsPipe } from './hide-checked-items/hide-checked-items';
import { HideDeletedItemsPipe } from './hide-deleted-items/hide-deleted-items';
@NgModule({
	declarations: [
		HideCheckedItemsPipe,
		HideDeletedItemsPipe
	],
	imports: [],
	exports: [
		HideCheckedItemsPipe,
		HideDeletedItemsPipe
	]
})
export class PipesModule {}
