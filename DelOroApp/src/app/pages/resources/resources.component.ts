import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, take } from 'rxjs';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  contents$: Observable<any> = new Observable<any>;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.contents$ = this.apiService.getDataFromServer('/resources').pipe(take(1))
  }
}
