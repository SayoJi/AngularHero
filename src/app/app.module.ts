import { HerosComponent } from './heros.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetaiComponent } from './hero-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';

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
  declarations: [
    AppComponent,
    HeroDetaiComponent,
    HerosComponent,
    DashboardComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    RouterModule.forRoot(routerConfig),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
