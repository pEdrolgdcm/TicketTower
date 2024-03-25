import { Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const routes: Routes = [
  { path: '', title: 'Ticket Tower', component: SidebarComponent },
  { path: 'home', title: 'Página Inicial', component: HomeComponent },
];
