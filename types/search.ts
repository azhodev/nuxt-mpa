export interface ISearchFilters {
    search?: string;
    sortBy?: string;
    title?: string;
    page?: number;
    limit?: number;
}

export interface ISearchResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
}