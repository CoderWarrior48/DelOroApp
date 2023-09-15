import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  links = [
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Resources', path: '/resources' },
    { name: 'Academics', path: '/academics' },
    { name: 'Athletics', path: '/athletics' },
    { name: 'Activities', path: '/activities' },
    { name: 'Counseling', path: '/counseling' },
    { name: 'Contact', path: '/contact' },
    { name: 'More', path: '/more' },
  ];

  constructor() {}
}
