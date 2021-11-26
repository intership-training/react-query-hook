import axios from "axios";

export default axios.create({
  baseURL: "https://covid19.ddc.moph.go.th/api",
  headers: {
    "Content-type": "application/json"
  }
});
