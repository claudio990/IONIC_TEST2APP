import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  characters = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('/ApiTest/users?page')
      .subscribe(res => {
        console.log(res);
        this.characters = res;
      })
  }

}
