import { ShareDataService } from './../../services/share-data.service';
import { CoinInfo } from './../../models/CoinInfo';
import { CoinsService } from './../../services/coins.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { CoinOperations, CoinTransferObject } from '../../models/CoinOperation';
@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'info',
    'image',
    'name',
    'current_price',
    'symbol',
    'last_updated',
    'favorites',
    'graphics',
  ];
  dataSource = new MatTableDataSource<CoinInfo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public setFavorite(element: CoinInfo): void {
    if (this.favoritesSet.has(element.id)) {
      this.favoritesSet.delete(element.id);
      this.sharedData.coin$.next({
        elementId: element.id,
        operation: CoinOperations.Delete,
      });

      console.log('deleted');
    } else {
      this.favoritesSet.add(element.id);
      this.sharedData.coin$.next({
        elementId: element.id,
        operation: CoinOperations.Add,
      });
      console.log('added');
    }
  }

  public favoritesSet = new Set<string>();
  public graphicItem: string;
  public viewGraphicItem(element: CoinInfo) {
    if (this.graphicItem == element.id) {
         this.graphicItem = ""; 
    }
    this.graphicItem = element.id;
    this.sharedData.graphiCoin$.next(element.id);
  }
  constructor(
    private coinService: CoinsService,
    private sharedData: ShareDataService
  ) {}

  ngOnInit(): void {
    this.coinService.getCoins().subscribe((data: CoinInfo[]) => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
