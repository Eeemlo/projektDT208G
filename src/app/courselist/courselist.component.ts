import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseDataService } from '../services/course-data.service';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MyScheduleService } from '../services/my-schedule.service';

@Component({
  selector: 'app-courselist',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule, MatSelectModule],
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CourselistComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['courseCode', 'courseName', 'subject', 'points', 'syllabus', 'action'];
  dataSource: MatTableDataSource<Course> = new MatTableDataSource<Course>();

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

   // Data för mat-select
   subjects: string[] = [];
   selectedSubject: string | undefined;
 

  // Konstruktor för att använda service för kursdata
  constructor(private courseDataService: CourseDataService,
    private myScheduleService: MyScheduleService
  ) {}

  // Prenumerera på data från webbtjänst
  ngOnInit() {
    this.courseDataService.getCourses().subscribe(courses => {
      this.dataSource.data = courses;


      // Extrahera unika subject och lägg till "Alla ämnen"
      const uniqueSubjects = new Set(courses.map(course => course.subject));
      this.subjects = ['Alla ämnen', ...uniqueSubjects];
    });
  }

  ngAfterViewInit() {
    if (this.sort) {
    this.dataSource.sort = this.sort;
    }

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectChange(event: any) {
    this.selectedSubject = event.value;
    console.log('Selected subject:', this.selectedSubject);
    // Filtrera tabellen baserat på valt ämne
    if (this.selectedSubject === 'Alla ämnen') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filterPredicate = (data: Course, filter: string) => {
        return data.subject.toLowerCase().includes(filter.toLowerCase());
      };
      this.dataSource.filter = this.selectedSubject ? this.selectedSubject.toLowerCase() : '';
}
}

addCourse(course: Course): void {
  this.myScheduleService.addCourse(course);
  alert(`Kursen ${course.courseName} har lagts till i ditt schema.`);
}
}
 