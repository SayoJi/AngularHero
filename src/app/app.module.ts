import { HerosComponent } from './heros.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetaiComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { AppRroutingModule } from './app-routing.module';

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
    AppRroutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
