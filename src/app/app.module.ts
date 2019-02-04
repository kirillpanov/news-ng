import { NewsModule } from "./news/news.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NewsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
