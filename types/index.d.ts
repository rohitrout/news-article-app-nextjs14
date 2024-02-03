export interface CustomInputProps {
  route: string;
  placeholder?: string;
  otherClasses?: string;
}

export interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export interface removeUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export interface SearchParamsProps {
    searchParams: { [key: string]: string | undefined };
}

export interface GetArticleParams {
    page?: number;
    pageSize?: number;
    search?: string;
    filterDate?: date;
  }
