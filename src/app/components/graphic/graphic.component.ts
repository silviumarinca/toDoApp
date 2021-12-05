import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoinInfo } from 'src/app/models/CoinInfo';
import { ShareDataService } from '../../services/share-data.service';
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
})
export class GraphicComponent implements OnInit {
  coinId:string;
  constructor(private sharedDataService: ShareDataService) {}

  ngOnInit(): void {
    this.sharedDataService.getCoinGraphics().subscribe((coin) => {
      this.coinId = coin;
    });
  }
}
