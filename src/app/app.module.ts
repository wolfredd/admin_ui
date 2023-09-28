import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'

import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';

import { ClientComponent } from './pages/client/client.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './component/notfound/notfound.component';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TradeComponent } from './pages/trade/trade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CancelledtradesComponent } from './pages/cancelledtrades/cancelledtrades.component';
import { FailedtradesComponent } from './pages/failedtrades/failedtrades.component';
import { FilledtradesComponent } from './pages/filledtrades/filledtrades.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AuthInterceptor } from './intercepter/AuthInterceptor';
import { StockComponent } from './pages/stock/stock.component';
import { UseractivitiesComponent } from './pages/useractivities/useractivities.component';
import { OrderComponent } from './pages/order/order.component';
import { PendingtradesComponent } from './pages/pendingtrades/pendingtrades.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    LayoutComponent,
    LoginComponent,
    NotFoundComponent,
    TradeComponent,
    CancelledtradesComponent,
    FailedtradesComponent,
    FilledtradesComponent,
    ActivityComponent,
    PortfolioComponent,
    StockComponent,
    UseractivitiesComponent,
    OrderComponent,
    PendingtradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
