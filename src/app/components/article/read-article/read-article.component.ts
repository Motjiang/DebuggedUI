import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css']
})
export class ReadArticleComponent implements OnInit {

  articles$?: Observable<Article[]>;

  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
    // get all blog posts from API
    this.articles$ = this.articleService.getAllArticles();
  }
}
