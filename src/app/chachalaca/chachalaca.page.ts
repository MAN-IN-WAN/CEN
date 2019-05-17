import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-chachalaca',
  templateUrl: './chachalaca.page.html',
  styleUrls: ['./chachalaca.page.scss'],
})
export class ChachalacaPage implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit() {
  }

}
