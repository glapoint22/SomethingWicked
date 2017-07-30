import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGroupsComponent } from './photo-groups.component';

describe('PhotoGroupsComponent', () => {
  let component: PhotoGroupsComponent;
  let fixture: ComponentFixture<PhotoGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
