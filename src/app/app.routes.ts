import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { MyscheduleComponent } from './myschedule/myschedule.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Hem | NIAL' },
    { path: 'courses', component: CoursesComponent, title: 'Kurser | NIAL' },
    { path: 'myschedule', component: MyscheduleComponent, title: 'Mitt schema | NIAL'},
    { path: '**', redirectTo: 'home'}
];
