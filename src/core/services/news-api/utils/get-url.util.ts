export function getSourcesUrl(key: string): string {
    return `https://newsapi.org/v2/sources?language=en&apiKey=${key}`;
}

export function getNewsUrl(key: string, source: string, page: number): string {
    return `https://newsapi.org/v2/top-headlines?sources=${source}&page=${page}&apiKey=${key}`;
}

export function getAllNewsUrl(key: string, page: number): string {
    return `https://newsapi.org/v2/everything?q=a&sortBy=publishedAt&language=en&page=${page}&apiKey=${key}`;
}
