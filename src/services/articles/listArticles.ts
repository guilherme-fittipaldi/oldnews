import axiosClient from "../apiClient";
import { ListArticlesParams } from "../../entities/articles/articles";

export function listArticles(params: ListArticlesParams) {
  let subparams = "";
  if (params.orderBy) {
    subparams = `&orderBy=${params.orderBy}`;
  }
  if (params.articleType) {
    subparams = `&articleType=${params.articleType}`;
  }
  const url = `/articles/${params.month}/${params.day}?page=${params.page}${subparams}`;

  return axiosClient.get(url);
}
