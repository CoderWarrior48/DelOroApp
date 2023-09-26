import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, take } from 'rxjs';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})

export class ActivitiesComponent {
  contents$: Observable<any> = new Observable<any>;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.contents$ = this.apiService.getMessage('/activities').pipe(take(1))
  }
}
