import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MyschedulelistComponent } from '../myschedulelist/myschedulelist.component';

@Component({
  selector: 'app-myschedule',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MyschedulelistComponent],
  templateUrl: './myschedule.component.html',
  styleUrl: './myschedule.component.css'
})
export class MyscheduleComponent {
}
