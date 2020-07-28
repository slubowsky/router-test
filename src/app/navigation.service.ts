import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navigator: () => void;

  constructor() { }

  navigate() {
    this.navigator();
  }
}
