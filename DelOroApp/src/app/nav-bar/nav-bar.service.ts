import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  links = [
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Academics', path: '/' },
    { name: 'Athletics', path: '/' },
    { name: 'Activities', path: '/' },
    { name: 'Conseling', path: '/' },
    { name: 'Contact', path: '/' },
    { name: 'More', path: '/' },
  ];

  constructor() {}
}
