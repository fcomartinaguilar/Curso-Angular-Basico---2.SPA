import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
  styleUrls: ['./search-heroe.component.css']
})
export class SearchHeroeComponent implements OnInit {

  nombreABuscar:string;

  heroes:any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

              }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => { 
      this.heroes = this._heroesService.buscarHeroes(params['nombreABuscar']);
      this.nombreABuscar = params['nombreABuscar'];
    });
  }

}
