import { Component ,OnInit } from '@angular/core';
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

  ngOnInit(){
    this.getHeroes();
  }

  onSelected(hero : Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(){
    this.heroService.getHeros().then(heros => this.heros = heros);
    // this.heroService.getHeros().then(
    //   function (heros){
    //     this.heros = heros;
    //   }
    // )
  }
}


