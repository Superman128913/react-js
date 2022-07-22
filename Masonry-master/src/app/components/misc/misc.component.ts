import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../contentInfo';
import { ContainerService } from '../../services/container.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class MiscComponent implements OnInit {

  constructor(private containerService: ContainerService) { }
  misc: ContentInfo[] = [];
  a = 0;
  getimages(): void {
    this.containerService.getImg()
      .subscribe(resImgData => {
          for (let i = 0; i < resImgData.length ; i++) {
            if (resImgData[i].type.includes('MISC.')) {
              this.misc[this.a] = resImgData[i];
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
