import { Component, OnInit } from '@angular/core';
import { CoinOperations } from 'src/app/models/CoinOperation';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public coinId: string;

  constructor(private sharedData: ShareDataService) { }

  ngOnInit(): void {
    this.sharedData.getCoin().subscribe(coin => {
      if(coin.operation == CoinOperations.Delete)
      {
          this.coinId="";
      }else
        this.coinId = coin.elementId;
    })
  }

}
