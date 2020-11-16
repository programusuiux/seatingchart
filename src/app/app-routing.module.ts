import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScFooterPrimaryComponent } from './sc-footer-primary/sc-footer-primary.component';
import { ScFooterSecondaryComponent } from './sc-footer-secondary/sc-footer-secondary.component';
import { ScEventCategoryCardComponent } from './sc-event-category-card/sc-event-category-card.component';
import { ScSearchPrimaryComponent } from './sc-search-primary/sc-search-primary.component';
import { ScHeaderSliderComponent } from './sc-header-slider/sc-header-slider.component';
import { ScEventListCardComponent } from './sc-event-list-card/sc-event-list-card.component';
import { ScEventCategoryListComponent } from './sc-event-category-list/sc-event-category-list.component';
import { ScNavbarPrimaryComponent } from './sc-navbar-primary/sc-navbar-primary.component';
import { ScEventInfoComponent } from './sc-event-info/sc-event-info.component';
import { ScEventListComponent } from './sc-event-list/sc-event-list.component';
import { ScPackageCardComponent } from './sc-package-card/sc-package-card.component';
import { ScHeaderInnerComponent } from './sc-header-inner/sc-header-inner.component';
import { ScPackageTicketingCardComponent } from './sc-package-ticketing-card/sc-package-ticketing-card.component';


const routes: Routes = [
  {path:"scfooterprimary", component:ScFooterPrimaryComponent},
  {path:"scfootersecondary", component:ScFooterSecondaryComponent},
  {path:"sceventcategorycard", component:ScEventCategoryCardComponent},
  {path:"scsearchprimary", component:ScSearchPrimaryComponent},
  {path:"scheaderslider", component:ScHeaderSliderComponent},
  {path:"sceventlistcard", component:ScEventListCardComponent},
  {path:"sceventcategorylist", component:ScEventCategoryListComponent},
  {path:"scnavbarprimary", component:ScNavbarPrimaryComponent},
  {path:"sceventinfo", component:ScEventInfoComponent},
  {path:"sceventlist", component:ScEventListComponent},
  {path:"packagecard", component:ScPackageCardComponent},
  {path:"headerinner", component:ScHeaderInnerComponent},
  {path:"packageticketing", component:ScPackageTicketingCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
