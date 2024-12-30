import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFeaturedArticleComponent } from './sub-featured-article.component';

describe('SubFeaturedArticleComponent', () => {
  let component: SubFeaturedArticleComponent;
  let fixture: ComponentFixture<SubFeaturedArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubFeaturedArticleComponent]
    });
    fixture = TestBed.createComponent(SubFeaturedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
