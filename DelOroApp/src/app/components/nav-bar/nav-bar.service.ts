import { Injectable } from '@angular/core';
import { Links} from './toolbar.links';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  
  links = Links

  constructor() {}
}
