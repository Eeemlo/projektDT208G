import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CourseDataService } from '../services/course-data.service';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courselist',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourselistComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns: string[] = ['courseCode', 'courseName', 'subject', 'points', 'syllabus', 'action'];

  // Konstruktor för att använda service för kursdata
  constructor(private courseDataService: CourseDataService) {}

  // Prenumerera på data från webbtjänst
  ngOnInit() {
    this.courseDataService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}