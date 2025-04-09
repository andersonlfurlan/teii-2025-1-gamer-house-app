import { Component, OnInit } from '@angular/core';
import { Game } from './models/game.type';
import { GameService } from './services/game.service';
import { AlertController, ViewDidEnter, ViewDidLeave, ViewWillEnter, ViewWillLeave } from '@ionic/angular';


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: false,
})
export class GamesPage implements OnInit, ViewWillEnter,
  ViewDidEnter, ViewWillLeave, ViewDidLeave {

  gamesList: Game[] = [];

  constructor(
    private gameService: GameService,
    private alertController: AlertController,
  ) { }

  ionViewDidLeave(): void {
    console.log('ionViewDidLeave');
  }
  ionViewWillLeave(): void {
    console.log('ionViewWillLeave');
  }
  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
  }
  ionViewWillEnter(): void {
    console.log('ionViewWillEnter');
    this.gamesList = this.gameService.getList();
  }

  ngOnInit() { }

  remove(game: Game) {
    this.alertController.create({
      header: 'Exclusão',
      message: `Confirma a exclusão do jogo ${game.title}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.gameService.remove(game);
            this.gamesList = this.gameService.getList();
          }
        },
        'Não'
      ]
    }).then(alert => alert.present());
  }

}
