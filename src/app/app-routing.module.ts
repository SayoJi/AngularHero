import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetaiComponent } from './hero-detail.component';
import { NgModule } from '@angular/core';

const routerConfig: Routes = [
    {
      path : '',
      redirectTo : '/dashboard',
      pathMatch : 'full'
    },
    {
      path : 'heroes',
      component : HerosComponent
    },
    {
      path : 'dashboard',
      component : DashboardComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetaiComponent
    },
  ];

@NgModule({

    imports: [RouterModule.forRoot(routerConfig)],
    exports: [AppRroutingModule]
})

export class AppRroutingModule {
}

