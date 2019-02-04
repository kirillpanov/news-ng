import { ArticleComponent } from "./article/article/article.component";
import { Routes } from "@angular/router";
import { NewsComponent } from "./news/news/news.component";

export const appRoutes: Routes = [
    { path: "news", component: NewsComponent },
    { path: "news/:id", component: ArticleComponent },
    // {
    //     path: "heroes",
    //     component: HeroListComponent,
    //     data: { title: "Heroes List" }
    // },
    {
        path: "",
        redirectTo: "/news",
        pathMatch: "full"
    }
    // { path: '**', component: PageNotFoundComponent }
];
