import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageThreeComponent } from './page-three.component';
import { PageFourComponent } from './page-four/page-four.component';

const routes: Routes = [
  {
    path: '',
    component: PageThreeComponent,
    children: [
      {
        path: 'page-four',
        component: PageFourComponent
      },
      {
        path: 'page-five',
        loadChildren: () =>
          import(`./page-five/page-five.module`).then(
            m => m.PageFiveComponentModule
          )
      },
      {
        path: '',
        redirectTo: 'page-four',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageThreeComponentRoutingModule {}
