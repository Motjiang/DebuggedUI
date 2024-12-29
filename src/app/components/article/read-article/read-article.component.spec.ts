import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadArticleComponent } from './read-article.component';

describe('ReadArticleComponent', () => {
  let component: ReadArticleComponent;
  let fixture: ComponentFixture<ReadArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadArticleComponent]
    });
    fixture = TestBed.createComponent(ReadArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
