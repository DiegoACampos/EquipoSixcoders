import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CreateCourseComponent } from './pages/create-course/create-course.component';

import { MaterialModule } from '../material/material.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, FloatLabelType } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GetCoursesComponent } from './pages/get-courses/get-courses.component';
import { CourseInformationComponent } from './pages/course-information/course-information.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { ProfessorCoursesComponent } from './pages/professor-courses/professor-courses.component';


@NgModule({
  declarations: [
    CreateCourseComponent,
    GetCoursesComponent,
    CourseInformationComponent,
    EditCourseComponent,
    ProfessorCoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule,
  ]
})
export class CourseModule { }