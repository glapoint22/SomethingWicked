import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSingleComponent } from './media-single.component';

describe('MediaSingleComponent', () => {
  let component: MediaSingleComponent;
  let fixture: ComponentFixture<MediaSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
