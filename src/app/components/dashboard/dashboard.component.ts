import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { CoinModel } from 'src/app/Model/coin.model';
import { ToDoModel } from 'src/app/Model/todo.model';
import {CoinsService} from '../../services/coins.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  coins:Array<CoinModel>=[];
  constructor(private service:CoinsService ) {}
 

  ngOnInit(): void {
    this.service.getDashBoardCoins()
    .subscribe(coins => this.coins = coins);
  }
}
