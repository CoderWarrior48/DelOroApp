import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getDataFromServer(route: any) {
    return this.http.get(`http://localhost:3000${route}`);
  }
  // postDataToServer() {
  //   return this.http.post(`http://localhost:3000/accounts`,{username: 'diego', password: '3412'});
  // }

  //testing....
  postDataToServer(): Observable<any[]> {
    return this.http.post<any[]>(`http://localhost:3000/accounts`).pipe(map(expenses => {return expenses}));
  }
}
