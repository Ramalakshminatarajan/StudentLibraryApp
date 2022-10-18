import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'book-list', component: BookListComponent},
  { path: 'student-list', component:  StudentListComponent},
  { path: '',   redirectTo: '/student-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
