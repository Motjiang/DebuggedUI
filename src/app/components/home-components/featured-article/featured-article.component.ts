import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { Article } from '../../article/models/article';
import { ArticleService } from '../../article/services/article.service';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.css']
})
export class FeaturedArticleComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  currentArticle?: Article;
  articleSubscription?: Subscription;
  intervalSubscription?: Subscription;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    // Fetch all articles
    this.articleSubscription = this.articleService.getAllArticles().subscribe((articles) => {
      this.articles = articles;
      this.randomizeArticle(); // Show a random article initially
      this.startArticleRotation(); // Start rotating articles
    });
  }

  randomizeArticle(): void {
    if (this.articles.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.articles.length);
      this.currentArticle = this.articles[randomIndex];
    }
  }

  startArticleRotation(): void {
    // Switch articles every 1 min 
    this.intervalSubscription = timer(0, 60000).subscribe(() => {
      this.randomizeArticle();
    });
  }

  ngOnDestroy(): void {
    // Clean up subscriptions to prevent memory leaks
    this.articleSubscription?.unsubscribe();
    this.intervalSubscription?.unsubscribe();
  }
}
