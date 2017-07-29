import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { HistoricalCityWeatherComponent } from 'app/containers/historical-city-weather/historical-city-weather.component';
import { CitiesListComponent } from 'app/containers/cities-list/cities-list.component';
import { NotFoundComponent } from 'app/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: CitiesListComponent
  },
  {
    path: 'historical/:id',
    component: HistoricalCityWeatherComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
