import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { GraphicComponent } from './components/graphic/graphic.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    FavoritesComponent,
    FavoriteComponent,
    CoinDetailsComponent,
    WalletComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
