import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-heros-list',
  template: `
             <ul class = "heroes">
               <li *ngFor = "let hero of heros"
               (click) = "onSelected(hero)"
               [class.selected]="hero === selectedHero">
               <span class = "badge">{{hero.id}}</span> {{hero.name}}
               </li>
             </ul>
             <app-hero-detail [hero] = "selectedHero"></app-hero-detail>
            `,
  styleUrls : ['heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;

  // Injectable
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHerosSlowly().then(heros => this.heros = heros);
    // 为什么下面这样写运行会报错？为什么this.heros无法识别类型？
    // this.heroService.getHeros().then(
    //   function (hs){
    //     this.heros = hs;
    //   })
  }
}


