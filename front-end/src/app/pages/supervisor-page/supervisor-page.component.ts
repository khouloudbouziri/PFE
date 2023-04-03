import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-supervisor-page',
  templateUrl: './supervisor-page.component.html',
  styleUrls: ['./supervisor-page.component.css'],
})
export class SupervisorPageComponent {
  constructor(public authService: AuthService) {}

  firstname: string =
    this.authService.authenticatedUser?.supervisor.firstname ?? '';
}
