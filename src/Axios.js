//It will serve as a base url for our other components
import axios from "axios";

const instance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
});

export default instance;
