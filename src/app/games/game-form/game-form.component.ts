import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateMask, priceMask, maskitoElement, parseDateMask } from 'src/app/core/constants/mask.constants';
import { ApplicationValidators } from 'src/app/core/validators/url.validator';
import { GameService } from '../services/game.service';

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


  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

  hasError(field: string, error: string) {
    const formControl = this.gameForm.get(field);
    return formControl?.touched && formControl?.errors?.[error]
  }

  save() {
    let { value } = this.gameForm;
    value.launchDate = parseDateMask(value.launchDate)
    console.log(value);
    this.gameService.add(value);
  }
}
