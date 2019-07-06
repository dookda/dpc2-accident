import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public url: string = 'http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  registerDevice(userId, deviceToken, isAccept) {
    return new Promise((resolve, reject) => {
      const data = {
        user_id: userId,
        device_token: deviceToken,
        is_accept: isAccept,
      };
      this.http.post(this.url + '/fcm/registerdevice', data).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      const data = {
        username: username,
        password: password,
      };
      this.http.post(this.url + '/users/login', data).subscribe(res => {
        resolve(res);
        console.log('ok' + res);
      }, err => {
        reject(err);
      });
    });
  }


}
