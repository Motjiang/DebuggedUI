import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullArticleComponent } from './full-article.component';

describe('FullArticleComponent', () => {
  let component: FullArticleComponent;
  let fixture: ComponentFixture<FullArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullArticleComponent]
    });
    fixture = TestBed.createComponent(FullArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
