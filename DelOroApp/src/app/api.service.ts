import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getDataFromServer(route: any) {
    return this.http.get(`http://localhost:3000${route}`);
  }
  postDataToServer() {
    return this.http.post(`http://localhost:3000/accounts`,{username: 'diego', password: '3412'});
  }
}
