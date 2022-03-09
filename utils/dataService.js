import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

/* send message on live chat */
/* send message on live chat */
const sendMessage = async (data) => {
  try {
    const response = await axios.post("/chat/add-message", data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { sendMessage };
