import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mylist',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mylist/mylist.module').then(m => m.MyListPageModule)
          }
        ]
      },
      {
        path: 'partnerlist',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../partnerlist/partnerlist.module').then(m => m.PartnerlistModule)
          }
        ]
      },
      {
        path: 'lovemeter',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lovemeter/lovemeter.module').then(m => m.LovemeterPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/mylist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mylist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
