import { Article } from "./article.model";

export interface GetArticlesResponse {
    totalResults: number;
    articles: Array<Article>;
}
