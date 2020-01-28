import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrumbHeadingComponent } from './crumb-heading.component';

describe('CrumbHeadingComponent', () => {
  let component: CrumbHeadingComponent;
  let fixture: ComponentFixture<CrumbHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrumbHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrumbHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
