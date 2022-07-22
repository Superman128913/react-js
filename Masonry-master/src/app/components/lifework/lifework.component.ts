import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from  '../../services/container.service';

@Component({
  selector: 'app-lifework',
  templateUrl: './lifework.component.html',
  styleUrls: ['./lifework.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class LifeworkComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  lifework: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.containerService.getImg()
      .subscribe(resImgData => {
          for (let i = 0; i < resImgData.length ; i++) {
            if (resImgData[i].type.includes('LIFE')) {
              this.lifework[this.a] = resImgData[i];
              this.a++;
            }
          }
        }
      );
  }

  ngOnInit() {
    this.getimages();
  }

}
