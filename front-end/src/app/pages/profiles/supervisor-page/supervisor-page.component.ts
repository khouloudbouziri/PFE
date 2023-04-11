import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/Authentication/auth.service';

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
