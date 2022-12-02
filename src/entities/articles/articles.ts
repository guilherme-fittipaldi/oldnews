export type ArticlesModel = {
  id: string;
  title: string;
  date: string;
  era: string;
  source: string;
  description: string;
  popularityScore: number;
  articleType: "events" | "birthdays" | "deaths";
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
};

export type ListArticlesParams = {
  day: number;
  month: number;
  page: number;
  orderBy?: "popularity" | "newer" | "older";
};

export type ListArticlesModel = {
  content: ArticlesModel[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
