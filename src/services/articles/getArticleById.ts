import axiosClient from "../apiClient";

export function getArticleById(id: string) {
  return axiosClient.get(`/articles/${id}`);
}
