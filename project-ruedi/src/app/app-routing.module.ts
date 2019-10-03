import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'love-entry-detail', loadChildren: './love-entry-detail/love-entry-detail.module#LoveEntryDetailPageModule' },
  { path: 'details/:id', loadChildren: './love-entry-detail/love-entry-detail.module#LoveEntryDetailPageModule' },
  { path: 'details', loadChildren: './love-entry-detail/love-entry-detail.module#LoveEntryDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
