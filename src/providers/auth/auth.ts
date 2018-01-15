import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
    estado: boolean;
  constructor(private http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  getUser(username: String, password: String){
      const body = 'username='+username+'&password='+password+'';

    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post('https://whatbills.herokuapp.com/user/signin', body,{headers: headers})
        ;

  }
  setb(b:boolean){
      this.estado = b;
  }
  getb(){
      return this.estado;
  }

/*
  postUser(){
      const body = 'username=nubia&password=123';

      const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

      return this.http.post('https://whatbills.herokuapp.com/user/send', body,{headers: headers})
          ;
  }
*/
}
