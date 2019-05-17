import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public searchText: string;
  public isNahuatl: boolean = true;
  public isOrtho: boolean = false;


  constructor() { }

  searchChange(val: string) {
  }

  
}
