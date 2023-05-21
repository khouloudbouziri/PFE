import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupervisorService } from 'src/app/services/Supervisor/supervisor.service';
import { VisitorService } from 'src/app/services/Visitor/visitor.service';
import { PhotoComponent } from 'src/app/photo/photo.component';

@Component({
  selector: 'app-supervisor-card',
  templateUrl: './supervisor-card.component.html',
  styleUrls: ['./supervisor-card.component.css'],
})
export class SupervisorCardComponent {
  id: any;
  images!: any[];
  public ids: any;
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
        console.log(this.supervisors);
      });
  }

  deleteSupervisor(supervisor: number) {
    this.SupervisorService.deleteSupervisor(supervisor).subscribe(
      (res: any) => {
        this.findSupervisorByIdCompany();
      }
    );
  }

  decode(byte: any): any {
    if (byte) return 'data:image/jpg;base64,' + byte;
  }

  ngOnInit(): void {
    this.findSupervisorByIdCompany();
  }
}
