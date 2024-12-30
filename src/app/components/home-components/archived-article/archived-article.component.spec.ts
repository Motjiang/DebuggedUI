import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedArticleComponent } from './archived-article.component';

describe('ArchivedArticleComponent', () => {
  let component: ArchivedArticleComponent;
  let fixture: ComponentFixture<ArchivedArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedArticleComponent]
    });
    fixture = TestBed.createComponent(ArchivedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
