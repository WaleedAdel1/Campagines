import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './Component/conent/campaigns/campaigns.component';
import { CartComponent } from './Component/conent/cart/cart.component';


const routes: Routes = [
  {
    path: 'Campagines',
    component: CampaignsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: '/Campagines',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
