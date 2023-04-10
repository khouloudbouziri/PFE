import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';

@Component({
  selector: 'app-supervisor-card',
  templateUrl: './supervisor-card.component.html',
  styleUrls: ['./supervisor-card.component.css'],
})
export class SupervisorCardComponent {
  id: any;
  supervisors: any = [];
  constructor(
    private route: ActivatedRoute,
    private visitorService: VisitorService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
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
    this.visitorService
      .findSupervisorByIdCompany(this.id)
      .subscribe((supervisors) => {
        this.supervisors = supervisors;
      });
  }
}
