import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-library';

  toRead =[
    new Book("A Memoir of Migraine Survival", "Danielle Newport Fancher", 2018),
    new Book("Migraine", "Oliver Sacks",1999),
  ]
}

