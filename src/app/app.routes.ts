import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';
 
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'abouts', component: AboutsComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'search/:nombreABuscar', component: SearchHeroeComponent },
  
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
 
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

 