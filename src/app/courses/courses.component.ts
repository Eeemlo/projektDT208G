import { Component } from '@angular/core';
import { CourseDataService } from '../services/course-data.service';
import { CourselistComponent } from '../courselist/courselist.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourselistComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {


}
