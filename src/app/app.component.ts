import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'demo';

  students = [
    {
      name: 'sdadsa',
      id: 'PH12334',
      status: 0,
    },
    {
      name: 'sonanziw',
      id: 'PH12354',
      status: 1,
    },
    {
      name: 'sdqqwesa',
      id: 'PH12934',
      status: 1,
    },
  ];

  champs = [
    {
      name: 'Irelia',
      dame: 570,
      defend: 30,
      speed: 325,
      price: 6300,
      avatar:
        'https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc910fb350b471e64/60ad28e077e996669f49f386/Irelia_Skin01.jpg',
    },
    {
      name: 'Thresh',
      dame: 260,
      defend: 40,
      speed: 325,
      price: 6300,
      avatar:
        'https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc4ac7eb09c43bed9/6100678a1929bc58854d2f1a/Thresh_Skin01_full.jpg',
    },
    {
      name: 'Yone',
      dame: 575,
      defend: 30,
      speed: 325,
      price: 6300,
      avatar:
        'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt3cefcd6544df9e5d/60ee13e4810a0e49eabfd0be/yone-splash.jpg',
    },
  ];

  name = 'Tran Bao Son';
  id = 'PH17733';
}
