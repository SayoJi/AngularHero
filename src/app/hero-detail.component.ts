import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector : 'app-hero-detail',
  template : `<div *ngIf = "hero">
             <h2>{{hero.name}}</h2>
             <div><label>id:{{hero.id}}</label></div>
             <div>
               <label>name:</label>
               <input [(ngModel)]="hero.name" placeholder="name">
             </div>
             </div>
             `
})

export class HeroDetaiComponent {
  @Input() hero: Hero;
}
