import { Component } from '@angular/core';
import {ContainerService} from './services/container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContainerService]
})
export class AppComponent {

}
