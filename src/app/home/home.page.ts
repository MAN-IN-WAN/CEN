import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { IonToggle } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(private router:Router, public global: GlobalService) {}

  @ViewChild('transOrtho') transOrtho:IonToggle;

  goSettings() {
    this.router.navigate(['settings']);
  }

  setNahuatl(mode: boolean) {
    this.global.isNahuatl = mode;
    this.transOrtho.disabled = !mode;
  }
}
