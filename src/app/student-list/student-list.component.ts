import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {StudentData} from "../Modal/StudentModal";
import {StudentList} from "../test-data/StudentList";

/** Constants used to fill up our data base. */

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements AfterViewInit {
  isOver = false;

  displayedColumns: string[] = ['RollNo', 'Name', 'Department', 'AmountDue','Action'];
  dataSource: MatTableDataSource<StudentData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {
    
    const students = StudentList;
    
    this.dataSource = new MatTableDataSource(students);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  clickAdd(){
    //this.openMenu = !this.openMenu;
    console.log("Added");
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

/** Builds and returns a new User. */
/**function createNewUser(id: Number): StudentData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    rollNo:"18MX"+Math.round(Math.random() * 100).toString(),
    name: name,
    department: AvailableDepartment[Math.round(Math.random() * (AvailableDepartment.length - 1))],
    phone: Math.round(Math.random() * 100).toString(),
  };*/
}
