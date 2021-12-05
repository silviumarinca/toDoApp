 
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinInfo } from '../models/CoinInfo';
import { CoinOperations, CoinTransferObject } from '../models/CoinOperation';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public coin$ = new BehaviorSubject<CoinTransferObject>({operation:CoinOperations.Delete,elementId:"-1" });
  public graphiCoin$ = new BehaviorSubject<string>(undefined);
  constructor() { }

  public getCoin(): Observable<CoinTransferObject> {
    return this.coin$.asObservable();
  }

  public getCoinGraphics(): Observable<string> {
    return this.graphiCoin$.asObservable();
  }
}
