export interface ApiInfo {
  count: number;
  page: number;
  next: string;
  prev: string | null;
}

export interface ApiResponse<T> {
  info: ApiInfo;
  results: T;
}
