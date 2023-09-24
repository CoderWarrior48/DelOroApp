import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Account {
  name: string
}

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:8000/api/cats')
  }

  getCat(name: string): Observable<Account> {
    return this.http.get<Account>('http://localhost:8000/api/cats/' + name)
  }

  insertCat(cat: Account): Observable<Account> {
    return this.http.post<Account>('http://localhost:8000/api/cats/', cat)
  }

  updateCat(cat: Account): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/cats/' + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + name)
  }
}