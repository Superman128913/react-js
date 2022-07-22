import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from  '../../services/container.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class CommercialComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  commercial: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.containerService.getImg()
      .subscribe(resImgData => {
          for (let i = 0; i < resImgData.length ; i++) {
            if (resImgData[i].type.includes('COMMERCIAL')) {
              this.commercial[this.a] = resImgData[i];
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
