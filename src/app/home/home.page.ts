import {Component, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('agendaTab', {read: ElementRef}) agendaTabRef: ElementRef;
  @ViewChild('floorPlanTab', {read: ElementRef}) floorPlanTabRef: ElementRef;
  @ViewChild('surveyTab', {read: ElementRef}) surveyTabRef: ElementRef;
  @ViewChild('aboutTab', {read: ElementRef}) aboutTabRef: ElementRef;
  private tabs: ElementRef[] = [];
  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.tabs[0] = (this.agendaTabRef);
    this.tabs[1] = (this.floorPlanTabRef);
    this.tabs[2] = (this.surveyTabRef);
    this.tabs[3] = (this.aboutTabRef);
  }

  setTabAsSelected(index) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (i === index) {
        this.renderer.setStyle(this.tabs[i].nativeElement, 'color', '#ffffff');
        this.renderer.setStyle(this.tabs[i].nativeElement, 'background-color', '#8D7249');
      } else {
        this.renderer.setStyle(this.tabs[i].nativeElement, 'color', '#737373');
        this.renderer.setStyle(this.tabs[i].nativeElement, 'background-color', '#ffffff');
      }
    }
  }

  goToAgenda() {
    this.setTabAsSelected(0);
    this.router.navigateByUrl(this.router.url + '/agenda');
  }

  goToFloorPlan() {
    this.setTabAsSelected(1);
    this.router.navigateByUrl(this.router.url + '/floor-plan');
  }

  goToSurvey() {
    this.setTabAsSelected(2);
    this.router.navigateByUrl(this.router.url + '/survey');
  }

  goToAbout() {
    this.setTabAsSelected(3);
    this.router.navigateByUrl(this.router.url + '/about');
  }
}
