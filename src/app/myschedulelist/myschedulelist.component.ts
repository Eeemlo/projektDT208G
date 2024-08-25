import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MyScheduleService } from '../services/my-schedule.service';
import { Course } from '../models/course';
import { MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-myschedulelist',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './myschedulelist.component.html',
  styleUrl: './myschedulelist.component.css'
})
export class MyschedulelistComponent {
  displayedColumns: string[] = ['courseCode', 'courseName', 'subject', 'points', 'syllabus', 'action']; 
dataSource: MatTableDataSource<Course> = new MatTableDataSource<Course>();

constructor(private myScheduleService: MyScheduleService) {}

ngOnInit() {
  this.loadCourses();
}

loadCourses() {
  this.dataSource.data = this.myScheduleService.getStoredCourses();
}

removeCourse(courseCode: string): void {
  this.myScheduleService.removeCourse(courseCode);
  this.loadCourses();
}

  // Metod för att räkna totalpoängen
  getTotalPoints(): number {
    return this.dataSource.data.reduce((acc, course) => acc + course.points, 0);
  }
}


