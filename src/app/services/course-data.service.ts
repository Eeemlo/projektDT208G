import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  private url : string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json"
  private storageKey = 'mySchedule';

  constructor(private http : HttpClient) { }

  //Hämta kurser
  getCourses() : Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

}
