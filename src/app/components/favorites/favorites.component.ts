import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { cwd } from 'process';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit, OnChanges {
  favorites: Array<any> = [];
  favoriteIds = ['bitcoin', 'solana', 'chainlink'];
  myCoins = { bitcoin: 2, solana: 3, chainlink: 5 };
  @Input() coins: any = [];
  constructor() {}
  ngOnInit(): void {}
  ngOnChanges() {
    this.setFavorites();
  }
  setFavorites() {
    console.log("This favorites");
    console.log(this.coins);
    this.favorites = this.coins.filter((coin: any) =>
      this.favoriteIds.includes(coin.id)
    );
    this.favorites.forEach((favorite) => {
      favorite.my_currency = this.myCoins[favorite.id] * favorite.current_price;
    });
    console.log(this.favorites);
  }
}
