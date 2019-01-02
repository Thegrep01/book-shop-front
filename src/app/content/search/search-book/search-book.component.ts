import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearcBookService } from './search-book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  searchForm: FormGroup;
  name: string;
  author: string;

  constructor(private fb: FormBuilder, private searcBookService: SearcBookService) {
    this.searchForm = fb.group({
      'name': '',
      'author': '',
      'history': '',
      'Sf': '',
      'drama': '',
      'action': '',
      'adventure': '',
      'romance': '',
      'mystery': '',
      'horror': '',
      'novel': '',
      'bookbinder': ['hardcover'],
    });
  }

  ngOnInit() {
  }

  search(value) {
    const req: string = this.searcBookService.genReq(value);
    console.log(req);
  }

}
