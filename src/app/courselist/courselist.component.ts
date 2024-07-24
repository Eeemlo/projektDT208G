import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseDataService } from '../services/course-data.service';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courselist',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourselistComponent implements OnInit {
  displayedColumns: string[] = ['courseCode', 'courseName', 'subject', 'points', 'syllabus', 'action'];
  dataSource: MatTableDataSource<Course> = new MatTableDataSource<Course>();

  // Konstruktor för att använda service för kursdata
  constructor(private courseDataService: CourseDataService) {}

  // Prenumerera på data från webbtjänst
  ngOnInit() {
    this.courseDataService.getCourses().subscribe(courses => {
      this.dataSource.data = courses;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}