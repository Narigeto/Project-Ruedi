import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'mylist', loadChildren: './mylist/mylist.module#MyListPageModule' },
  { path: 'love-entry-detail', loadChildren: './love-entry-detail/love-entry-detail.module#LoveEntryDetailPageModule' },
  { path: 'details/:id', loadChildren: './love-entry-detail/love-entry-detail.module#LoveEntryDetailPageModule' },
  { path: 'details', loadChildren: './love-entry-detail/love-entry-detail.module#LoveEntryDetailPageModule' },  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'welcome-page', loadChildren: './welcome-page/welcome-page.module#WelcomePagePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
