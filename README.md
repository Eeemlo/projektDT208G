# ProjektDT208G - NIAL University

A simple course management system built with Angular and TypeScript. It allows users to browse university courses, add them to their personal schedule, and manage the saved courses.

## Features

### Course List (courselist component)
- Displays a list of university courses with search and subject filtering.
- Columns: Course Code, Course Name, Subject, Points, Syllabus, and Action (Add to Schedule).
- Sorting and pagination for easy navigation
- Responsive design for smaller screens

### My Schedule (myschedulelist component)
- Displays the user's saved courses with an option to remove them
- Totalt points are calculated and displayed.
- Responsive design for smaller screens

### Services
- CourseDataService: Fetches course data from an external JSON source.
- MyScheduleService: Manages user's saved courses using localStorage.


## Usage
- Browse and filter courses on the course page.
- Add or remove courses from your schedule.

## Technologies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
