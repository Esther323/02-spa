import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicio/heroes.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = []
  termino:string;

  constructor(private ActivatedRoute:ActivatedRoute,
    private _heroesService: HeroesService) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params =>{
      this.termino =params['od'];
      this.heroes = this._heroesService.buscarHeroes( params['od'] );
      console.log(this.heroes);
    });
}
}
