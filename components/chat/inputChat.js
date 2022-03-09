import { ACTION_TYPES, StoreContext } from "pages/_app";
import { useContext, useState } from "react";
import { sendMessage } from "utils/dataService";

const InputChat = () => {

  /* initiate state */
  let [message, setMessage] = useState("");

  /* bind textarea value to local state */
  const handleOnChange = (e) => setMessage(e.target.value);

  /* get access to context */
  const { dispatch, state } = useContext(StoreContext);

  /* extract messages from context */
  const { channel, messages } = state;

  const handleSendMessage = async (event) => {
    event.preventDefault();

    /* no message, no sending */
    if(!message.length) return;

    /* form data to send the message to the API */
    const data = new FormData();
    data.append('message', message);
    data.append('channel', channel);
    data.append('sender', 'guest');

    /* send message to API to retrieve the channel name to listen for */
    const response = await sendMessage(data);


    /* set channel in context */
    dispatch({
      type: ACTION_TYPES.SET_CHANNEL,
      payload: response.data.data,
    });

    if (!messages.length) {

      // /* add to context */
      dispatch({
        type: ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG,
        payload: {
          message,
          sender: 'guest',
          created_at: Date.now()
        },
      });
    }

    /* reset textarea message */
    setMessage("");
  };

  return (
    <div className="flex flex-col">
      <form>
        <textarea
          rows={3}
          name="comment"
          id="comment"
          className="shadow-lg block w-full p-3 rounded-md resize-none focus:ring-0 sm:text-sm border border-gray-200 bg-gray-200 my-1 focus:outline-none focus:ring focus:ring-gray-200"
          placeholder="Add your message ..."
          value={message}
          onChange={handleOnChange}
        />

        <div className="flex justify-end w-full mb-1 mt-2">
          <button
            onClick={handleSendMessage}
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-xs font-normal rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-gray-100 shadow-lg"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputChat;
