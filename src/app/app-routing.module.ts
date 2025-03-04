import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './authorization/login/login.component';
import { SignupComponent } from './authorization/signup/signup.component';
import { ReadCategoryComponent } from './components/category/read-category/read-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ReadArticleComponent } from './components/article/read-article/read-article.component';
import { UpdateArticleComponent } from './components/article/update-article/update-article.component';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { Page404Component } from './error-pages/page404/page404.component';
import { TestHomeComponent } from './test-home/test-home.component';
import { DashboardComponent } from './authorization/dashboard/dashboard.component';
import { AdministratorComponent } from './authorization/administrator/administrator.component';
import { WriterComponent } from './authorization/writer/writer.component';
import { authGuard } from './security/guard.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'    
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,canActivate:[authGuard]
  },
  {
    path:'administrator-page',
    component: AdministratorComponent,canActivate:[authGuard]
  },
  {
    path:'writer-page',
    component: WriterComponent,canActivate:[authGuard]
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'full/article/:urlHandle',
    component: FullArticleComponent
  },
  {
    path:'article',
    component: ReadArticleComponent
  },
  {
    path:'add/article',
    component: AddArticleComponent
  },
  {
    path:'update/article/:id',
    component: UpdateArticleComponent
  },
  {
    path:'category',
    component: ReadCategoryComponent
  },
  {
    path:'add/category',
    component: AddCategoryComponent
  },
  {
    path:'update/category/:id',
    component: UpdateCategoryComponent
  },
  {
    path:'error404',
    component: Page404Component
  },
  {
    path:'view',
    component: TestHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
