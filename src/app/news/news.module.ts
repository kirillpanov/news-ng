import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { NewsLineItemComponent } from './news-line-item/news-line-item.component';
import { LoadMoreButtonComponent } from './load-more-button/load-more-button.component';

@NgModule({
  declarations: [NewsComponent, ActionBarComponent, NewsLineItemComponent, LoadMoreButtonComponent],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
