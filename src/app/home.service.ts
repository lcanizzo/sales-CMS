import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

}
