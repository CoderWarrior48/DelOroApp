import { Component } from '@angular/core';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  links: { name: string; path: string }[];

  constructor(private _nbService: NavBarService) {
    this.links = _nbService.links;
  }
}
