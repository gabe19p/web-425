/**
 * Title: app.routing.ts
 * Author: Danial Purselley
 * Date: 5 Nov 2022
 * Description: basic profile angular
 * application f/ web-425
 */

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
