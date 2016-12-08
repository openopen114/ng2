import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username:string;
    private client_id = '11d3f59b9af7b820f714';
    private client_secret = 'd5ebf0435a9cba550911d6b5c1a58774475e9b0d';

// https://api.github.com/users/openopen114?client_id=11d3f59b9af7b820f714&client_secret=d5ebf0435a9cba550911d6b5c1a58774475e9b0d
// https://api.github.com/user/openopen114?client_id=11d3f59b9af7b820f714&client_secret=d5ebf0435a9cba550911d6b5c1a58774475e9b0d
  constructor(private _http: Http) {
      console.log('Github Service Ready...');
      this.username = 'openopen114';
  }


  getUser(){
      return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
          .map(res => res.json());
  }

}
