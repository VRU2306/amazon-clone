import axios from "axios";

const instance = axios.create({
  baseURL: 
  // "https://us-central1-clone-7473c.cloudfunctions.net/api",
 'http://localhost:5001/clonefeatures-46470/us-central1/api'
});

export default instance;
