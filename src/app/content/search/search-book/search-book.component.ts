import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  searchForm: FormGroup;
  name: string;
  author: string;

  constructor(private fb: FormBuilder) {
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
      'bookbinder': '',
    });
  }

  ngOnInit() {
  }

  search(value) {
    let req = '?';

    if (value.name) {
      req += `name=${value.name}&`;
    }

    if (value.author) {
      req += `author=${value.author}&`;
    }

    if (value.history) {
      req += `genres=history&`;
    }

    if (value.Sf) {
      req += `genres=since fiction&`;
    }

    if (value.drama) {
      req += `genres=drama&`;
    }

    if (value.action) {
      req += `genres=action&`;
    }

    if (value.adventure) {
      req += `genres=adventure&`;
    }

    if (value.romance) {
      req += `genres=romance&`;
    }

    if (value.mystery) {
      req += `genres=mystery&`;
    }

    if (value.horror) {
      req += `genres=horror&`;
    }
    if (value.novel) {
      req += `genres=novel&`;
    }

    if (value.bookbinder) {
      req += `bookbider=${value.bookbinder}&`;
    }

    console.log(req);
  }

}
