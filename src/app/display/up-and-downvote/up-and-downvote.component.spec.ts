import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAndDownvoteComponent } from './up-and-downvote.component';

describe('UpAndDownvoteComponent', () => {
  let component: UpAndDownvoteComponent;
  let fixture: ComponentFixture<UpAndDownvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpAndDownvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpAndDownvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
