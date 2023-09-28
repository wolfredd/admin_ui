import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './component/layout/layout.component';

import { ClientComponent } from './pages/client/client.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './component/notfound/notfound.component';
import { TradeComponent } from './pages/trade/trade.component';

import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { FilledtradesComponent } from './pages/filledtrades/filledtrades.component';
import { FailedtradesComponent } from './pages/failedtrades/failedtrades.component';
import { CancelledtradesComponent } from './pages/cancelledtrades/cancelledtrades.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { StockComponent } from './pages/stock/stock.component';
import { UseractivitiesComponent } from './pages/useractivities/useractivities.component';
import { OrderComponent } from './pages/order/order.component';
import { PendingtradesComponent } from './pages/pendingtrades/pendingtrades.component';




const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [guestGuard]},
  
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "clients",
        component: ClientComponent  
      },
      {
        path: "trades",
        component: TradeComponent  
      },
      {
        path: "filledtrades",
        component: FilledtradesComponent  
      },
      {
        path: "pendingtrades",
        component: PendingtradesComponent  
      },
      {
        path: "failedtrades",
        component: FailedtradesComponent  
      },
      {
        path: "cancelledtrades",
        component: CancelledtradesComponent  
      },
      {
        path: "filledtrades",
        component: FilledtradesComponent  
      },
      {
        path: "activities",
        component: ActivityComponent  
      },
      {
        path: "orders",
        component: OrderComponent  
      },
      {
        path: "useractivities/:userId",
        component: UseractivitiesComponent  
      },
      {
        path: "portfolios/:clientId/:clientFullName",
        component: PortfolioComponent  
      },
      {
        path: "stocks/:portfolioId/:portfolioName/:clientFullName",
        component: StockComponent  
      }
     ],
  },

  
  {path: '*', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
