import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineInfoComponent } from './magazine-info.component';

describe('MagazineInfoComponent', () => {
  let component: MagazineInfoComponent;
  let fixture: ComponentFixture<MagazineInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagazineInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
