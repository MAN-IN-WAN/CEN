import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tlachia',
  templateUrl: './tlachia.page.html',
  styleUrls: ['./tlachia.page.scss'],
})
export class TlachiaPage implements OnInit {

  users = [];
  page = 0;
  maximumPages = 3;

  public tlachiaMode:string = "0";

  constructor(public global: GlobalService, private httpClient: HttpClient) {
    this.loadUsers();
  }

  ngOnInit() {
  }

  loadUsers(infiniteScroll?) {
    this.httpClient.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
    .subscribe(res => {
      this.users = this.users.concat(res['results']);
      if (infiniteScroll) {
        infiniteScroll.target.complete();
      }
    })
  }
 
  loadMore(infiniteScroll) {
  console.log(infiniteScroll);
    this.page++;
    this.loadUsers(infiniteScroll);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.target.disabled = true;
    }
  }
  
}
