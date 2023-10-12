import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {
  cards$: Observable<any> = new Observable<any>;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.cards$ = this.apiService.getDataFromServer('/newsfeed').pipe(take(1))
  }
}
