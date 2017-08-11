import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGroupsComponent } from './media-groups.component';

describe('MediaGroupsComponent', () => {
  let component: MediaGroupsComponent;
  let fixture: ComponentFixture<MediaGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
