import {AfterViewInit,OnInit, Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { BookData } from '../Modal/BookModal';
import { BookList } from '../test-data/BookList';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  
  books=BookList;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<BookData>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private changeDetectorRef: ChangeDetectorRef) { 
      this.dataSource = new MatTableDataSource(this.books);
  }
  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
