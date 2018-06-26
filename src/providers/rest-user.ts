import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

import { StorageService } from './storage.service';
import { reject } from 'q';
import { User } from '../models/user';

@Injectable()
export class RestUserProvider {
  apiUrl = 'http://178.128.160.80:8000/api';
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: HttpClient, public storage: StorageService) {
    console.log('Hello RestProvider Provider');
  }

  saveUser(data) {
      return new Promise((resolve, reject) => {
        this.http.post(
          this.apiUrl+'/profile/',
          JSON.stringify(data),
          {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
          })
          .subscribe(res => {
            console.log('Saving user'),
            resolve(res);
          }, (err) => {
            console.log('Error on saving user'),
            reject(err);
          });
      });
    }

  getListUsers(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/profile/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  authenticate(user) {
    return this.http.post(
      this.apiUrl+'/token/',
      user,
      {
        observe: 'response', // Capture the HEADER
        responseType: 'text' // Avoid parse error about void JSON-body
      }
    );
  }

  userLogout() {
    this.storage.clearLocalUser();
    console.log('teste');
  }

  refreshToken(token){
    return this.http.post(
      this.apiUrl+'/token/refresh/',
      token,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
 }

  getId(){
    let token = this.storage.getLocalAccessToken();
    if(token){
      token = this.jwtHelper.decodeToken(token);
      return token.user_id;
    }
    return null;
  }

  successfulLogin(username: string, access: string, refresh: string) {
    this.storage.setLocalUser(username, access, refresh);
  }

  getUserActivitiesIds(id){
    return this.http.get(this.apiUrl + '/profile/' + id + '/get_user_activities/');
  }

  searchPosition(user_id, activity_id){
    return this.http.get(this.apiUrl + '/hospital-activities/' + activity_id + '/search_user/' + '?user_key=' + user_id);
  }

  deleteUser(id, password) {
    console.log('Id no delete = ', id);
    console.log('Password no delete = ',password);

    return new Promise((resolve,reject) => {
      this.http.post(
        this.apiUrl + '/profile/' + id + '/delete_user/',
        password,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      ).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  getUser(id){
    return new Promise((resolve,reject) => {
      this.http.get(this.apiUrl + '/profile/' + id + '/').subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        console.log(err);
      });
    });
  }

  editPassword(id, user){
    return this.http.post(this.apiUrl + '/profile/' + id + '/edit_user/',
        user,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
  }

  editProfile(id, user){
    return this.http.put(this.apiUrl + '/profile/' + id + '/',
    user,
    {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }
}
