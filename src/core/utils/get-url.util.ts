export function getSourcesUrl(key: string): string {
    return `https://newsapi.org/v2/sources?language=en&apiKey=${key}`;
}

export function getNewsUrl(key: string, source: string): string {
    return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`;
}
