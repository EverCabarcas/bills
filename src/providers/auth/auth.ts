import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import {HttpClient, HttpHeaders} from "@angular/common/http";


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  getUser(){
      const body = 'username=nubia&password=123';

    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('https://whatbills.herokuapp.com/user/signin', body,{headers: headers})
        ;

  }

  postUser(){
      const body = 'username=nubia&password=123';

      const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

      return this.http.post('https://whatbills.herokuapp.com/user/send', body,{headers: headers})
          ;
  }

}
