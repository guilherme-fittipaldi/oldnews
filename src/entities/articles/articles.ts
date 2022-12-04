export type ArticlesModel = {
  id: string;
  title: string;
  date: DateModel;
  source: string;
  description: string;
  popularityScore: number;
  articleType: "events" | "births" | "deaths";
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
};

export type ListArticlesParams = {
  day: number;
  month: number;
  page: number;
  articleType?: "events" | "births" | "deaths";
  orderBy?: "popularity" | "newer" | "older";
};

export type DateModel = {
  year: number;
  month: number;
  day: number;
  era: "CE" | "BCE";
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
