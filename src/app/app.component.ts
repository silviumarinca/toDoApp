import { Component,OnInit } from '@angular/core';
import {CoinsService} from './services/coins.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'virtual Wallet'; 
  coins:any=[];
  constructor(private coinsService:CoinsService) { 
    
  }
  ngOnInit():void
  {
    setInterval(this.setCoinsValue.bind(this),20000);
  }
  setCoinsValue():void
  { 
   this.coinsService.getCoins()
    .subscribe(response=>{
        this.coins=response;
        console.log("MyCoins");
        console.log(this.coins);
    });
  }
}
