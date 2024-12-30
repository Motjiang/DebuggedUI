import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../components/article/models/article';
import { ArticleService } from '../components/article/services/article.service';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent  implements OnInit {

  article$?: Observable<Article[]>;
  constructor(private articleService: ArticleService) {

  }
  ngOnInit(): void {
    this.article$ = this.articleService.getAllArticles();
  }

}
