import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeceasedPage } from './deceased.page';

const routes: Routes = [
  {
    path: '',
    component: DeceasedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeceasedPageRoutingModule {}
