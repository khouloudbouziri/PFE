import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  showForm = false;

  constructor(public authService: AuthService, private router: Router) {}

  firstname: string =
    this.authService.authenticatedUser?.visitor.firstname ?? '';

  ngOnInit(): void {}

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigate(['./login']);
      },
    });
  }
}
