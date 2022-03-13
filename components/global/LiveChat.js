/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChatAlt2Icon,
  UserCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import InputChat from "components/chat/inputChat";
import { StoreContext } from "pages/_app";

const LiveChat = ({ drawer, handleDrawer }) => {
  /* instantiate context */
  const context = useContext(StoreContext);

  /* extract messages from context */
  const { messages } = context.state;

  useEffect(() => {
    /* scroll to the last message added */
    const objDiv = document.getElementById("messages");

    if (objDiv && drawer) {
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  }, [messages, drawer]);


  return (
    <Transition.Root show={drawer} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-50"
        onClose={handleDrawer}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0 bg-gray-200 bg-opacity-75 transition-opacity" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col bg-white shadow-2xl relative">
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll pt-6 pb-2">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <ChatAlt2Icon className="text-white bg-gray-400 rounded-lg h-16 w-16 absolute z-20 left-3 p-3 top-8 shadow-md" />
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => handleDrawer(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XCircleIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-4 flex-1 px-4 sm:px-6">
                      <div
                        className="h-full bg-gray-100 shadow-md rounded-lg pt-14 text-xs relative overflow-hidden"
                        aria-hidden="true"
                      >
                        <ul
                          className="absolute bottom-1 px-2 h-full overflow-y-scroll pt-8 w-full"
                          id="messages"
                        >
                          {messages &&
                            messages.map((message, key) => (
                              <li
                                key={key}
                                className={`p-1 flex block items-center ${message.sender !== "admin"
                                    ? "justify-start"
                                    : "justify-end"
                                  }`}
                              >
                                {["guest", "user"].includes(message.sender) && (
                                  <span className="inline-block">
                                    <UserCircleIcon className="h-10 text-gray-500" />
                                  </span>
                                )}
                                <span
                                  className={`p-4 text-xs rounded-none my-1 inline-block w-3/4 
                                  ${["guest", "user"].includes(message.sender)
                                      ? "bg-gray-500 text-white rounded-t-xl rounded-br-xl"
                                      : "bg-slate-300 border border-gray-200 text-slate-800 rounded-t-xl rounded-bl-xl"
                                    }`}
                                >
                                  {message.message}
                                  <span className="text-xs text-white d-block"></span>
                                </span>
                                {["admin"].includes(message.sender) && (
                                  <span className="inline-block">
                                    <UserCircleIcon className="h-10 text-slate-300" />
                                  </span>
                                )}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-1 bg-white">
                    <InputChat />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LiveChat;
