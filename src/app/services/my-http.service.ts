import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpService {

  constructor(public http: Http) { }

  public httpGetPromise(url: string, objeto: any) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.jsonData)
      .catch(this.handleError);
  }

  httpPostPromise(url: string, newItem: any) {
    return this.http.post(url, newItem)
      .toPromise()
      .then(this.jsonData)
      .catch(this.handleError);
  }

  private jsonData(resp: Response) {

    return resp.json() || {};

  }
  private handleError(error: Response | any) {

    return error;
  }
}
