import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWindowComponent } from './content-window.component';

describe('ContentWindowComponent', () => {
  let component: ContentWindowComponent;
  let fixture: ComponentFixture<ContentWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
