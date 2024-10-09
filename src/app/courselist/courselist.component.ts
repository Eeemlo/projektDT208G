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

  subjects: string[] = [];
  selectedSubject: string = 'Alla ämnen'; // Default subject filter value
  filterText: string = ''; // Default text filter value

  constructor(private courseDataService: CourseDataService,
              private myScheduleService: MyScheduleService) {}

  ngOnInit() {
    this.courseDataService.getCourses().subscribe(courses => {
      this.dataSource.data = courses;

      // Extrahera unika ämnen och inkludera "Alla ämnen" som val
      const uniqueSubjects = new Set(courses.map(course => course.subject));
      this.subjects = ['Alla ämnen', ...uniqueSubjects];

      // Anpassa filterPredicate för att hantera både fritext och ämne
      this.dataSource.filterPredicate = (data: Course, filter: string) => {
        const filterObject = JSON.parse(filter);
        const matchesText = data.courseName.toLowerCase().includes(filterObject.text) || 
                            data.courseCode.toLowerCase().includes(filterObject.text) || 
                            data.subject.toLowerCase().includes(filterObject.text);
        
        const matchesSubject = filterObject.subject === 'Alla ämnen' || 
                               data.subject === filterObject.subject;

        return matchesText && matchesSubject;
      };
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

  // Uppdatera textfiltret när användaren skriver
  applyFilter(event: Event) {
    this.filterText = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.applyCombinedFilter();
  }

  // Uppdatera ämnesfiltret när användaren ändrar ämne
  onSelectChange(event: any) {
    this.selectedSubject = event.value;
    this.applyCombinedFilter();
  }

  // Kombinera både text- och ämnesfiltret
  applyCombinedFilter() {
    const filterObject = { text: this.filterText, subject: this.selectedSubject };
    this.dataSource.filter = JSON.stringify(filterObject);
  }

  addCourse(course: Course): void {
    this.myScheduleService.addCourse(course);
    alert(`Kursen ${course.courseName} har lagts till i ditt schema.`);
  }
}
