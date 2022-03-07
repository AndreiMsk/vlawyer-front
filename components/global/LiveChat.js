/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/solid";
import InputChat from "components/chat/inputChat";
import { StoreContext } from "pages/_app";

const LiveChat = ({ drawer, handleDrawer }) => {
  /* instantiate context */
  const context = useContext(StoreContext);

  /* extract messages from context */
  const { messages } = context.state;

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
                <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-2xl relative">
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          <svg
                            className="text-gray-600 bg-gray-500 rounded-lg h-24 w-24 absolute z-20 left-10 p-3"
                            fill="#fff"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
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
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div
                        className="h-full bg-gray-300 rounded-lg pt-14 px-2 text-xs relative"
                        aria-hidden="true"
                      >
                        <ul className="absolute bottom-5 px-2">
                          {messages && messages.map((message, key) => (
                              <li key={key}>{message}</li>
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
