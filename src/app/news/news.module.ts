import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
    BrowserAnimationsModule,
    NoopAnimationsModule
} from "@angular/platform-browser/animations";

import { ActionBarComponent } from "./action-bar/action-bar.component";
import { LoadMoreButtonComponent } from "./load-more-button/load-more-button.component";
import { NewsFilterComponent } from "./news-filter/news-filter.component";
import { NewsLineItemComponent } from "./news-line-item/news-line-item.component";
import { NewsComponent } from "./news/news.component";
import { SourceSelectItemComponent } from "./source-select-item/source-select-item.component";
import { SourceSelectComponent } from "./source-select/source-select.component";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        CommonModule,
        FormsModule,
        MatButtonModule
    ],
    declarations: [
        NewsComponent,
        ActionBarComponent,
        NewsLineItemComponent,
        LoadMoreButtonComponent,
        SourceSelectComponent,
        SourceSelectItemComponent,
        NewsFilterComponent
    ],
    exports: [NewsComponent]
})
export class NewsModule {}
