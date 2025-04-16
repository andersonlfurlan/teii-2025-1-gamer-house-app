import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, priceMask, maskitoElement, parseDateMask, formatDateMask } from 'src/app/core/constants/mask.constants';
import { ApplicationValidators } from 'src/app/core/validators/url.validator';
import { GameService } from '../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
  standalone: false,
})
export class GameFormComponent implements OnInit {

  dateMask = dateMask;
  priceMask = priceMask;
  maskitoElement = maskitoElement;
  platforms = [
    'Playstation',
    'Xbox',
    'Nintendo Switch',
    'Android',
    'iOS',
    'PC'
  ]

  gameForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(150)
    ]),
    image: new FormControl('', [
      Validators.required,
      ApplicationValidators.urlValidator
    ]),
    launchDate: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', Validators.required),
    platforms: new FormControl('', Validators.required)
  });
  gameId!: number;

  constructor(
    private gameService: GameService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    // this.activatedRoute.snapshot.paramMap.get('gameId');
    const gameId = parseInt(this.activatedRoute.snapshot.params['gameId']);
    if (gameId) {
      const game = this.gameService.getById(gameId);
      if (game) {
        this.gameId = gameId;
        if (game.launchDate instanceof Date) {
          game.launchDate = formatDateMask(game.launchDate);
        }
        this.gameForm.patchValue(game);
      }
    }
  }

  ngOnInit() {
  }

  hasError(field: string, error: string) {
    const formControl = this.gameForm.get(field);
    return formControl?.touched && formControl?.errors?.[error]
  }

  save() {
    let { value } = this.gameForm;
    if (value.launchDate) {
      value.launchDate = parseDateMask(value.launchDate)
    }
    console.log(value);
    this.gameService.save({
      ...value,
      id: this.gameId
    });
    this.router.navigate(['/games']);
  }
}
