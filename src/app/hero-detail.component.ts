import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  // selector : 'app-hero-detail',
  templateUrl : 'hero-detail.component.html'
})

export class HeroDetaiComponent implements OnInit {
  // HeroDetail now is nav by router, so hero can't be get from Input
  // @Input() hero: Hero;
  hero: Hero;
  constructor(private router: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }
  ngOnInit(): void {
    this.router.paramMap.switchMap(
      (params: ParamMap) => this.heroService.getHero(+params.get('id'))
    ).subscribe(hero => this.hero = hero);
  }

  // go back button
  goBack(): void {
    // this.location.back();
  }
}
