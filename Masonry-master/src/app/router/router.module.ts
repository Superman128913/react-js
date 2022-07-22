import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from '../components/container/container.component';
import {DesignComponent} from '../components/design/design.component';
import {LifeworkComponent} from '../components/lifework/lifework.component';
import {MiscComponent} from '../components/misc/misc.component';
import {CommercialComponent} from '../components/commercial/commercial.component';



const routes: Routes = [
  { path: '', redirectTo: 'container', pathMatch: 'full' },
  { path: 'container',  component: ContainerComponent },
  { path: 'commercial',  component: CommercialComponent },
  { path: 'design',  component: DesignComponent },
  { path: 'lifework',  component: LifeworkComponent },
  { path: 'misc',  component: MiscComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes , { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


