import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private router: Router, 
    ) {}

  goToAgenda() {
    this.router.navigateByUrl(this.router.url + '/agenda');
  }

  goToFloorPlan() {
    this.router.navigateByUrl(this.router.url + '/floor-plan');
  }

  goToSurvey() {
    this.router.navigateByUrl(this.router.url + '/survey');
  }

  goToAbout() {
    this.router.navigateByUrl(this.router.url + '/about');
  }

  goToMySeating() {
    this.router.navigateByUrl(this.router.url + '/my-seating');
  }
}
