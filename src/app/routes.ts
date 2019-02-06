import { ArticleComponent } from "./article/article/article.component";
import { Routes } from "@angular/router";
import { NewsComponent } from "./news/news/news.component";
import { EditorComponent } from "./editor/editor/editor.component";

export const appRoutes: Routes = [
    { path: "news", component: NewsComponent },
    { path: "news/:id", component: ArticleComponent },
    {
        path: "editor/:id",
        component: EditorComponent
    },
    {
        path: "editor/new",
        component: EditorComponent
    },
    {
        path: "",
        redirectTo: "/news",
        pathMatch: "full"
    }
    // { path: '**', component: PageNotFoundComponent }
];
