import axios from "axios";

const instance = axios.create({
  baseURL: 
 "https://amazone-cloneds.herokuapp.com/"
});

export default instance;
