import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class DesignComponent implements OnInit {
  constructor(private containerService: ContainerService) { }
  design: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.containerService.getImg()
      .subscribe(resImgData => {
          for (let i = 0; i < resImgData.length ; i++) {
            if (resImgData[i].type.includes('DESIGN')) {
              this.design[this.a] = resImgData[i];
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
