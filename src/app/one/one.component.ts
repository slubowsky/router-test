import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  constructor(private router: Router, private route: ActivatedRoute, public navigationService: NavigationService) {
    navigationService.navigator = () => {
      router.navigate(['../three'],
        { relativeTo: route });
    };
  }

  test() {
    this.router.navigate(['../three'],
      { relativeTo: this.route });
  }
}
