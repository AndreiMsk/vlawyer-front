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

    /* send message to API to retrieve the channel name to listen for */
    const response = await sendMessage(channel, message);

    /* set channel in context */
    dispatch({
      type: ACTION_TYPES.SET_CHANNEL,
      payload: response.data.data,
    });

    if (!messages.length) {
      // /* add to context */
      dispatch({
        type: ACTION_TYPES.ADD_MESSAGE_TO_MESSAGE_BAG,
        payload: message,
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
          className="block w-full p-3 rounded-md resize-none focus:ring-0 sm:text-sm border border-gray-200 bg-gray-200 my-1"
          placeholder="Add your message ..."
          value={message}
          onChange={handleOnChange}
        />

        <div className="flex justify-end w-full my-1">
          <button
            onClick={handleSendMessage}
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputChat;
