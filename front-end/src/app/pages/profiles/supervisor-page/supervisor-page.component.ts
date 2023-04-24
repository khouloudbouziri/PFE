import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AuthService } from 'src/app/services/Authentication/auth.service';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-supervisor-page',
  templateUrl: './supervisor-page.component.html',
  styleUrls: ['./supervisor-page.component.css'],

})
export class SupervisorPageComponent {
  id: any;
  showContent1 = false;
  showContent2 = false;

  constructor(public authService: AuthService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
