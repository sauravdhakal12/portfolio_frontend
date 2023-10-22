import axios from "axios";

const baseUrl = "http://localhost:4000/";

const fetchAll = () => {
  return axios.get(baseUrl + "api/stocks").then((res) => res.data);
}

export { fetchAll };
