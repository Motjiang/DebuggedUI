import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeArticleComponent } from './main-home-article.component';

describe('MainHomeArticleComponent', () => {
  let component: MainHomeArticleComponent;
  let fixture: ComponentFixture<MainHomeArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHomeArticleComponent]
    });
    fixture = TestBed.createComponent(MainHomeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
