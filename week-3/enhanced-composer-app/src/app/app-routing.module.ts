/**
 * Title: app-routing.module.ts
 * Author: Danial Purselley
 * Date: 30 Oct 2022
 * Description: composer listing angular
 * application f/ web-425
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';

// navigation routes to change router-outlet
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent,
  },
  {
    path: 'composer',
    component: ComposerListComponent,
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
