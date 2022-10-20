import {AfterViewInit,OnInit, Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { BookData } from '../Modal/BookModal';
import { BookList } from '../test-data/BookList';
import { NewBookFormComponent } from '../new-book-form/new-book-form.component';
import { Genre } from '../Enum/Genres';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  isOver = false;
  books=BookList;
  obs!: Observable<any>;
  dataSource: MatTableDataSource<BookData>;
  NewBook!: BookData;
  animal!: string;
  name!: string;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private changeDetectorRef: ChangeDetectorRef,public dialog: MatDialog) { 
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

  openDialog(): void{

    this.NewBook = { id: '18mx111asdf',name: '',author: '',genre:Genre.CASE_STUDY};
    const dialogRef = this.dialog.open(NewBookFormComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: this.NewBook,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==null){
          console.log("Discarded...")
      }else{
        console.log("Saved...");
        this.NewBook = result;
      console.log(this.NewBook);
      }
      
    });
  }

  }
