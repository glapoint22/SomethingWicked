import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseImagesComponent } from './showcase-images.component';

describe('ShowcaseImagesComponent', () => {
  let component: ShowcaseImagesComponent;
  let fixture: ComponentFixture<ShowcaseImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
