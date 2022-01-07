import axios from "axios";

const instance = axios.create({
  baseURL: 
  // "https://us-central1-clonefeatures-46470.cloudfunctions.net/api",
 "https://amazone-cloneds.herokuapp.com/"
});

export default instance;
