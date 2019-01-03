import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchComicsService {

  constructor() { }

  public genReq(value): string {
    let req = '?';

    if (value.name) {
      req += `name=${value.name}&`;
    }

    if (value.author) {
      req += `author=${value.author}&`;
    }

    if (value.painter) {
      req += `painter=${value.painter}&`;
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

    if (value.side) {
      req += `side=${value.side}&`;
    }

    return req;
  }
}
