import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsInfoComponent } from './comics-info.component';

describe('ComicsInfoComponent', () => {
  let component: ComicsInfoComponent;
  let fixture: ComponentFixture<ComicsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
