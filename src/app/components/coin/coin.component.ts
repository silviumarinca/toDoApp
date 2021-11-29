import { Component, Input, OnInit } from '@angular/core';
import { CoinModel } from 'src/app/Model/coin.model';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit 
{
  @Input()coin:CoinModel;
  constructor() { }

  ngOnInit(): void {
  }

}
