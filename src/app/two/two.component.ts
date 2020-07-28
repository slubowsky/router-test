import { Component } from '@angular/core';

import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  constructor(public navigationService: NavigationService) { }

  navigate() {
    this.navigationService.navigate();
  }
}
