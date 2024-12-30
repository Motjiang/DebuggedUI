import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from '../../article/models/article';
import { ArticleService } from '../../article/services/article.service';

@Component({
  selector: 'app-main-home-article',
  templateUrl: './main-home-article.component.html',
  styleUrls: ['./main-home-article.component.css']
})
export class MainHomeArticleComponent implements OnInit {

  articles$?: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getAllArticles().pipe(
      map(articles => articles.slice(0, 2)) // Take only the first two articles
    );
  }

}
