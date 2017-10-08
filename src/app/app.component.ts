import { Component } from '@angular/core';
import { Hero } from './hero.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  template: ` 
             <h1>{{title}}</h1>
             <ul class = "heroes">
               <li *ngFor = "let hero of heros" 
               (click) = "onSelected(hero)" 
               [class.selected]="hero === selectedHero">
               <span class = "badge">{{hero.id}}</span> {{hero.name}}
               </li>
             </ul>
             <hero-detail [hero] = "selectedHero"></hero-detail>
            `,
  styleUrls :['./app.Component.css']
})
export class AppComponent {
  heros : Hero[];
  title = 'Tour of Heroes';
  selectedHero :Hero;

  //Injectable
  constructor(private heroService : HeroService){

  }

  onSelected(hero : Hero): void{
    this.selectedHero = hero;
  }
}


