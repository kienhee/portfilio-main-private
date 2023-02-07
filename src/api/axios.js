/** @format */
import { baseURL } from "./index";
import axios from "axios";
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: baseURL,
});
let token = localStorage.getItem("accessToken-PszOIoxxwFnQgcNb");
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
export default instance;
