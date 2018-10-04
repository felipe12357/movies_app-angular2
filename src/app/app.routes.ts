import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {MovieComponent} from './componentes/movie/movie.component';
import {BuscadorComponent} from './componentes/buscador/buscador.component';

// import {BuscadorHeroesComponent} from './components/buscador-heroes/buscador-heroes.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id/:pagina', component: MovieComponent },
  { path: 'buscador/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
