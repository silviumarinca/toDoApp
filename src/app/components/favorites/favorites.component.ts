import { ShareDataService } from './../../services/share-data.service';
import { CoinInfo } from './../../models/CoinInfo';
import { Component, Input, OnInit } from '@angular/core';
import { CoinOperations } from 'src/app/models/CoinOperation';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input() coins: CoinInfo[] = [];

  favorites: CoinInfo[] = [];

  favoriteIds: string[] = [
    "bitcoin", "solana", "chainlink"
  ];

  myCoins: { [key: string]: number } = {
    "bitcoin": 2,
    "solana": 3,
    "chainlink": 5
  }

  constructor(private sharedData: ShareDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.setFavorites();
    console.log("FAVORITES COMPONENT CHANGED");
  }

  setFavorites() {
   
    this.sharedData.getCoin().subscribe( coinTransfer => { 
      if(coinTransfer.operation==CoinOperations.Delete)
      {
        this.favorites=[];
        return;
      }
      this.favorites = this.coins.filter((coin: CoinInfo) => coin.id === coinTransfer.elementId);
      this.favorites.forEach((favorite) => {
        favorite.my_currency = this.myCoins[favorite.id] * favorite.current_price;
      })
    })
  }
}
