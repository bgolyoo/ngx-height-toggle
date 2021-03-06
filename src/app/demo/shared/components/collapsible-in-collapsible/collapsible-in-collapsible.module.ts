import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleInCollapsibleComponent } from './collapsible-in-collapsible.component';
import { NgxHeightToggleModule } from '../../../../libs/ngx-height-toggle/src/ngx-height-toggle.module';
import { DefaultCollapsibleModule } from '../default-collapsible/default-collapsible.module';

@NgModule({
  imports: [CommonModule, NgxHeightToggleModule, DefaultCollapsibleModule],
  declarations: [CollapsibleInCollapsibleComponent],
  exports: [CollapsibleInCollapsibleComponent]
})
export class CollapsibleInCollapsibleModule {}
