import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'chachalaca',
        children: [
          {
            path: '',
            loadChildren: '../chachalaca/chachalaca.module#ChachalacaPageModule'
          }
        ]
      },
      {
        path: 'gdn',
        children: [
          {
            path: '',
            loadChildren: '../gdn/gdn.module#GdnPageModule'
          }
        ]
      },
      {
        path: 'temoa',
        children: [
          {
            path: '',
            loadChildren: '../temoa/temoa.module#TemoaPageModule'
          }
        ]
      },
      {
        path: 'tlachia',
        children: [
          {
            path: '',
            loadChildren: '../tlachia/tlachia.module#TlachiaPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/chachalaca',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/chachalaca',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
