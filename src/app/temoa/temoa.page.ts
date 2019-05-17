import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-temoa',
  templateUrl: './temoa.page.html',
  styleUrls: ['./temoa.page.scss'],
})
export class TemoaPage implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit() {
  }

}
