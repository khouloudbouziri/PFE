import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupervisorService } from 'src/app/services/Supervisor/supervisor.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';

@Component({
  selector: 'app-supervisor-card',
  templateUrl: './supervisor-card.component.html',
  styleUrls: [ './supervisor-card.component.css'],
})
export class SupervisorCardComponent {
  id: any;
  public ids:any;
  public idc: any = [];
  supervisors: any = [];
  constructor(
    private route: ActivatedRoute,
    private visitorService: VisitorService,
    private SupervisorService: SupervisorService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  findSupervisorByIdCompany() {
    this.visitorService
      .findSupervisorByIdCompany(this.id)
      .subscribe((res: any) => {
        this.supervisors = res;
        for (let i = 0; i < res.length; i++) {
          this.idc.push(res[i].id);
          this.ids=res[i].id;
        }
      });
  }

  deleteSupervisor(supervisor: number) {
    this.SupervisorService.deleteSupervisor(supervisor).subscribe(
      (res: any) => {
        //this.supervisors.splice(supervisor, 1);
        this.supervisors = res;
      }
    );
  }
  ngOnInit(): void {
    this.findSupervisorByIdCompany();
  }
}
