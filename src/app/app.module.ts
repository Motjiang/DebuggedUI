import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './authorization/login/login.component';

import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './authorization/signup/signup.component';
import { ProfileComponent } from './authorization/profile/profile.component';
import { InterceptorService } from './authorization/services/interceptor.service';
import { HeaderComponent } from './components/header/header.component';
import { ReadCategoryComponent } from './components/category/read-category/read-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ReadArticleComponent } from './components/article/read-article/read-article.component';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { UpdateArticleComponent } from './components/article/update-article/update-article.component';
import { ImageSelectorComponent } from './components/articleImage/image-selector/image-selector.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { Page404Component } from './error-pages/page404/page404.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HeaderComponent,
    ReadCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ReadArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    ImageSelectorComponent,
    FullArticleComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule,
    MarkdownModule.forRoot()

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
