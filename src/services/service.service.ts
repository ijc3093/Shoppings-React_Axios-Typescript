import http from "../http-common";
import ITutorialData from "../types/products.type"

class TutorialDataService {
  getAll() {
    return http.get<Array<ITutorialData>>("/products");
  }

  get(id: string) {
    return http.get<ITutorialData>(`/products/${id}`);
  }

  create(data: ITutorialData) {
    return http.post<ITutorialData>("/products", data);
  }

  update(data: ITutorialData, id: any) {
    return http.put<any>(`/products/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/products/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/products`);
  }

  // findByTitle(title: string) {
  //   return http.get(`/products?name=${title}`);
  // }
  findByTitle(name: string) {
    return http.get<Array<ITutorialData>>(`/products?name=${name}`);
  }
}

export default new TutorialDataService();