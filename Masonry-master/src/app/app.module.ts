import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import {ContainerService} from './services/container.service';
import {CommercialComponent} from './components/commercial/commercial.component';
import {MiscComponent} from './components/misc/misc.component';
import {LifeworkComponent} from './components/lifework/lifework.component';
import {DesignComponent} from './components/design/design.component';
import {AppRoutingModule} from './router/router.module';




@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FooterComponent,
    HeaderComponent,
    CommercialComponent,
    MiscComponent,
    LifeworkComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    NgMasonryGridModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
