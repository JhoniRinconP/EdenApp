import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeceasedPageRoutingModule } from './deceased-routing.module';

import { DeceasedPage } from './deceased.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeceasedPageRoutingModule
  ],
  declarations: [DeceasedPage]
})
export class DeceasedPageModule {}
