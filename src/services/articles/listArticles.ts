import axiosClient from "../apiClient";
import { ListArticlesParams } from "../../entities/articles/articles";

export function getArticles(params: ListArticlesParams) {
  let subparams = "";
  if (params.orderBy) {
    subparams = `&orderBy=${params.orderBy}`;
  }
  const url = `/articles/${params.month}/${params.day}?page=${params.page}${subparams}`;

  return axiosClient.get(url);
}
