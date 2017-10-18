import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
  // selector: 'app-heros-list',
  templateUrl: 'heros.component.html',
  styleUrls : ['heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;

  // Injectable
  constructor(private heroService: HeroService,
              private router: Router) {

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
  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


