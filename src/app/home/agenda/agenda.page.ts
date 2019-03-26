import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigateByUrl(this.router.url + '/agenda-detail');
  }
}
