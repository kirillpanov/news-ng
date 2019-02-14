import { HttpClientModule } from "@angular/common/http";
import { ApiDataService } from "./../core/services/api-data.service";
import { HeaderModule } from "./common/header/header.module";
import { environment } from "./../environments/environment";
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
import { appEffects, reducers, NewsStoreService } from "../core/index";
import { EditorModule } from "./editor/editor.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
    declarations: [AppComponent, FooterComponent, PageTitleComponent],
    imports: [
        HeaderModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ArticleModule,
        EditorModule,
        NewsModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production // Restrict extension to log-only mode
        }),
        EffectsModule.forRoot(appEffects)
    ],
    providers: [NewsStoreService, ApiDataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
