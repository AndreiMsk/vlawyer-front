import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

/* send message on live chat */
const sendMessage = async (channel = '681af34554de7baa1b403a631b0926fb', message) => {
  try {
    const response = await axios.post(
      `/chat/add-message/${channel}/message/${message}`
    );
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { sendMessage };
