import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ScFooterPrimaryComponent } from './sc-footer-primary/sc-footer-primary.component';
import { ScFooterSecondaryComponent } from './sc-footer-secondary/sc-footer-secondary.component';
import { ScEventCategoryCardComponent } from './sc-event-category-card/sc-event-category-card.component';
import { ScSearchPrimaryComponent } from './sc-search-primary/sc-search-primary.component';
import { ScHeaderSliderComponent } from './sc-header-slider/sc-header-slider.component';
import { ScEventListCardComponent } from './sc-event-list-card/sc-event-list-card.component';
import { ScOwlCarouselComponent } from './sc-owl-carousel/sc-owl-carousel.component';
import { ScEventCategoryListComponent } from './sc-event-category-list/sc-event-category-list.component';
import { ScNavbarPrimaryComponent } from './sc-navbar-primary/sc-navbar-primary.component';
import { ScEventInfoComponent } from './sc-event-info/sc-event-info.component';
import { ScEventListComponent } from './sc-event-list/sc-event-list.component';
import { ScViewallCardComponent } from './sc-viewall-card/sc-viewall-card.component';
import { ScPackageCardComponent } from './sc-package-card/sc-package-card.component';
import { ScHeaderInnerComponent } from './sc-header-inner/sc-header-inner.component';
import { ScPackageTicketingCardComponent } from './sc-package-ticketing-card/sc-package-ticketing-card.component';
import { ScCounterComponent } from './sc-counter/sc-counter.component';
import { ScPackageSelectionCoursesComponent } from './sc-package-selection-courses/sc-package-selection-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    ScFooterPrimaryComponent,
    ScFooterSecondaryComponent,
    ScEventCategoryCardComponent,
    ScSearchPrimaryComponent,
    ScHeaderSliderComponent,
    ScEventListCardComponent,
    ScOwlCarouselComponent,
    ScEventCategoryListComponent,
    ScNavbarPrimaryComponent,
    ScEventInfoComponent,
    ScEventListComponent,
    ScViewallCardComponent,
    ScPackageCardComponent,
    ScHeaderInnerComponent,
    ScPackageTicketingCardComponent,
    ScCounterComponent,
    ScPackageSelectionCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgImageSliderModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

