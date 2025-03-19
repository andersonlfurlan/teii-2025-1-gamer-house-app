import { Component, OnInit } from '@angular/core';
import { Game } from './models/game.type';
import { GameService } from './services/game.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: false,
})
export class GamesPage implements OnInit {

  gamesList: Game[] = [];

  constructor(
    private gameService: GameService
  ) {
    this.gamesList = gameService.gamesList;
  }

  ngOnInit() {

  }

}
