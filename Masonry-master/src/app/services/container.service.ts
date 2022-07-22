import { Injectable } from '@angular/core';
import {ContentInfo} from '../components/contentInfo';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContainerService {
  private infoUrl = 'api/info';

  constructor(private http: HttpClient) {}

  getImg(): Observable<ContentInfo[]> {
    return this.http.get<ContentInfo[]>(this.infoUrl);
  }
}
