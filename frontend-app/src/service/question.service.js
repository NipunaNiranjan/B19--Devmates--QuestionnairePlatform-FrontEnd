import http from "../http-common";
class QuestionDataService {
  getAll() {
    return http.get("/question");
  }
  get(id) {
    return http.get(`/question/${id}`);
  }
  create(data) {
    return http.post("/question", data);
  }
  update(id, data) {
    return http.put(`/question/${id}`, data);
  }
  delete(id) {
    return http.delete(`/question/${id}`);
  }
  deleteAll() {
    return http.delete(`/question`);
  }
  findByDescriptiveName(descriptiveName) {
    return http.get(`/question?descriptiveName=${descriptiveName}`);
  }
}
export default new QuestionDataService();