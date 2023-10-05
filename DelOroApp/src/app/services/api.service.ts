import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getDataFromServer(route: string) {
    console.log(`GETing${route}`)
    return this.http.get(`http://localhost:3000${route}`);
  }
  postDataToServer(route: string, data:any) {
    console.log(`POSTing to ${route}`)
    return this.http.post(`http://localhost:3000${route}`, data);
   
  }

  //testing....
  // postDataToServer(): Observable<any[]> {
  //   return this.http.post<any[]>(`http://localhost:3000/accounts`).pipe(map(expenses => {return expenses}));
  // }
}
