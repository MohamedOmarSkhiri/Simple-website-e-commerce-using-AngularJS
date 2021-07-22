import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from '../news/news.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'news', component: NewsComponent }
      ])
  ]
})
export class NewsModule { }
