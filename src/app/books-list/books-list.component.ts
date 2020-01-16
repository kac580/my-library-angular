import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input() books: Book[];
  @Input() name: string;

  newTitle: string;
  newAuthor: string;
  newYear: number;

  constructor() { }

  ngOnInit() {
  }

  details(book: Book){
    alert(`details for ${book.title}`)
  }

  addMovie() {
    let book = new Book (this.newTitle, this.newAuthor, this.newYear);
    this.books.push(book);
  }
}
