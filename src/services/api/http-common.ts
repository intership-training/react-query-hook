import axios from "axios";
export default axios.create({
  baseURL: "https://www.cmuccdc.org/api",
  headers: {
    "Content-type": "application/json"
  }
});