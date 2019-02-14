import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsComponent } from "./news/news.component";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { NewsLineItemComponent } from "./news-line-item/news-line-item.component";
import { LoadMoreButtonComponent } from "./load-more-button/load-more-button.component";
import { SourceSelectComponent } from './source-select/source-select.component';
import { SourceSelectItemComponent } from './source-select-item/source-select-item.component';

@NgModule({
    declarations: [
        NewsComponent,
        ActionBarComponent,
        NewsLineItemComponent,
        LoadMoreButtonComponent,
        SourceSelectComponent,
        SourceSelectItemComponent
    ],
    imports: [CommonModule],
    exports: [NewsComponent]
})
export class NewsModule {}
