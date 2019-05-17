import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-gdn',
  templateUrl: './gdn.page.html',
  styleUrls: ['./gdn.page.scss'],
})
export class GdnPage implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit() {
  }

}
