import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLinkComponent } from './business-link.component';

describe('BusinessLinkComponent', () => {
  let component: BusinessLinkComponent;
  let fixture: ComponentFixture<BusinessLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessLinkComponent]
    });
    fixture = TestBed.createComponent(BusinessLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
