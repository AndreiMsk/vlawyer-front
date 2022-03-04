import { useState } from "react";

const InputChat = ({ addMessage }) => {

  /* initiate state */
  let [message, setMessage] = useState('');

  /* bind textarea value to local state */
  const handleWriteMessage = (e) => setMessage(e.target.value)

  /* send value to parent component using prop passed down */
  const sendMessage = (event) => {
    event.preventDefault();
    addMessage(message);
    setMessage('')
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
          onChange={handleWriteMessage}
        />

        <div className="flex justify-end w-full my-1">
          <button
            onClick={sendMessage}
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
