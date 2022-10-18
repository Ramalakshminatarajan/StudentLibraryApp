import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material/table';
import { StudentData } from '../Modal/StudentModal';
import { StudentList } from '../test-data/StudentList';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

import { StudentListComponent } from './student-list.component';
import { By } from '@angular/platform-browser';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with Empty studentlist', () => {
    const StudentList:StudentData[] = [];
    let studentListComponent: StudentListComponent = new StudentListComponent();
    studentListComponent.dataSource = new MatTableDataSource(StudentList)
    expect(component).toBeTruthy();
    //ToDo: Test No Data appears

  });

  it('should create with studentlist', () => {
    let studentListComponent: StudentListComponent = new StudentListComponent();
    studentListComponent.dataSource = new MatTableDataSource(StudentList)
    expect(component).toBeTruthy();
    //ToDo: Test Data appears
  });
});
