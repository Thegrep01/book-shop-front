import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComicsComponent } from './search-comics.component';

describe('SearchComicsComponent', () => {
  let component: SearchComicsComponent;
  let fixture: ComponentFixture<SearchComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
