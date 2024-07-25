import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class MyScheduleService {

  private storageKey = 'mySchedule';

  constructor() { }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Lägg till kurs till schemat
  addCourse(course: Course): void {
    if (this.isLocalStorageAvailable()) {
      let courses = this.getStoredCourses();
      courses.push(course);
      localStorage.setItem(this.storageKey, JSON.stringify(courses));
    } else {
      console.error('localStorage is not available');
    }
  }

  // Hämta alla kurser från schemat
  getStoredCourses(): Course[] {
    if (this.isLocalStorageAvailable()) {
      let courses = localStorage.getItem(this.storageKey);
      return courses ? JSON.parse(courses) : [];
    } else {
      console.error('localStorage is not available');
      return [];
    }
  }

  // Ta bort en kurs från schemat
  removeCourse(courseCode: string): void {
    if (this.isLocalStorageAvailable()) {
      let courses = this.getStoredCourses();
      courses = courses.filter(course => course.courseCode !== courseCode);
      localStorage.setItem(this.storageKey, JSON.stringify(courses));
    } else {
      console.error('localStorage is not available');
    }
  }

  // Rensa hela schemat
  clearSchedule(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.storageKey);
    } else {
      console.error('localStorage is not available');
    }
  }
}