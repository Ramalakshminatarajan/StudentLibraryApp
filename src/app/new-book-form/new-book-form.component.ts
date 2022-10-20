import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { BookListComponent } from '../book-list/book-list.component';
import { Genre } from '../Enum/Genres';
import { BookData } from '../Modal/BookModal';
@Component({
  selector: 'app-new-book-form',
  templateUrl: './new-book-form.component.html',
  styleUrls: ['./new-book-form.component.css']
})
export class NewBookFormComponent implements OnInit {

  public formdata!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BookListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookData,
  ) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.maxLength(200)]),
      genre : new FormControl('', [Validators.required, Validators.maxLength(200)]),
      author : new FormControl('', [Validators.required, Validators.maxLength(200)]),
      copies : new FormControl('', [Validators.required])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  public checkError = (controlName: string, errorName: string) => {
      return this.formdata.controls[controlName].hasError(errorName);
  }

}
