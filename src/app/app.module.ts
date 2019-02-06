import { appRoutes } from "./routes";
import { NewsModule } from "./news/news.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticleModule } from "./article/article.module";
import { FooterComponent } from "./common/footer/footer.component";
import { HeaderComponent } from "./common/header/header.component";
import { PageTitleComponent } from "./common/page-title/page-title.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { appEffects, reducers, metaReducers } from "../core/index";
import { EditorModule } from "./editor/editor.module";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        PageTitleComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AppRoutingModule,
        ArticleModule,
        EditorModule,
        NewsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(appEffects)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
