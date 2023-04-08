import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supervisor } from 'src/app/models/Supervisor';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent {
  id: any;
  showContent0 = true;
  showContent1 = false;
  showContent2 = false;
  supervisors: Supervisor[] = [];

  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private visitorService: VisitorService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onClick() {
    this.showContent0;
  }

  findSupervisorByIdCompany() {
    this.visitorService
      .findSupervisorByIdCompany(this.id)
      .subscribe((res: any) => {
        this.supervisors = res;
        console.log(res);
        console.log(this.supervisors);
      });
  }

  ngOnInit(): void {
    this.findSupervisorByIdCompany();
  }

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigate(['./login']);
      },
    });
  }
}
