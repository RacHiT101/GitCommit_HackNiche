import React, { useEffect, useState } from "react";
import "./App.css";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setcurrentMessage] = useState("");
  const [MessageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setcurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      //   setcurrentMessage('');
    });
  }, [socket]);

  console.log(MessageList);
  // console.log(MessageList[0].author);

  return (
    <>
      {/* <div className="chat-window w-full">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {MessageList.map((messagecontent) => {
              return (
                <div
                  className="message"
                  id={username === messagecontent.author ? "other" : "you"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messagecontent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messagecontent.time}</p>
                      <p id="author">{messagecontent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type your message here   .."
            onChange={(e) => {
              setcurrentMessage(e.target.value);
            }}
          />
          <button
            onClick={sendMessage}
            onKeyDown={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          >
            &#9658;
          </button>
        </div>
      </div> */}
      <div class="flex h-screen text-gray-800 antialiased">
        <div class="flex h-full w-full flex-row overflow-x-hidden">
          <div class="flex w-64 flex-shrink-0 flex-col bg-white py-8 pl-6 pr-2">
            <div class="flex h-12 w-full flex-row items-center justify-center">
              <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div class="ml-2 text-2xl font-bold">QuickChat</div>
            </div>
            <div class="mt-4 flex w-full flex-col items-center rounded-lg border border-gray-200 bg-indigo-100 py-6 px-4">
              <div class="h-20 w-20 overflow-hidden rounded-full border">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  class="h-full w-full"
                />
              </div>
              <div class="mt-2 text-sm font-semibold">{username}</div>
              <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
              <div class="mt-3 flex flex-row items-center">
                <div class="flex h-4 w-8 flex-col justify-center rounded-full bg-indigo-500">
                  <div class="mr-1 h-3 w-3 self-end rounded-full bg-white"></div>
                </div>
                <div class="ml-1 text-xs leading-none">Active</div>
              </div>
            </div>
            <div class="mt-8 flex flex-col">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Active Conversations</span>
                <span class="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
                  4
                </span>
              </div>
              <div class="-mx-2 mt-4 flex h-48 flex-col space-y-1 overflow-y-auto">
                <button class="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
                    H
                  </div>
                  <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
                <button class="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                    M
                  </div>
                  <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
                  <div class="ml-auto flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs leading-none text-white">
                    2
                  </div>
                </button>
                <button class="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-200">
                    P
                  </div>
                  <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
                </button>
                <button class="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-pink-200">
                    C
                  </div>
                  <div class="ml-2 text-sm font-semibold">Christine Reid</div>
                </button>
                <button class="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200">
                    J
                  </div>
                  <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
                </button>
              </div>
              <div class="mt-6 flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Archived</span>
                <span class="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300">
                  7
                </span>
              </div>
            </div>
          </div>
          <div class="flex h-full flex-auto flex-col p-6">
            <div class="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
              <div class="mb-4 flex h-full flex-col overflow-x-auto">
                <div class="flex h-full flex-col">
                  <ScrollToBottom className="message-container">
                    {MessageList.map((messagecontent) => {
                      return (
                        <div
                  className="message"
                  id={username === messagecontent.author ? "other" : "you"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messagecontent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messagecontent.time}</p>
                      <p id="author">{messagecontent.author}</p>
                    </div>
                  </div>
                </div>
                      );
                    })}
                  </ScrollToBottom>
                </div>
              </div>
              <div class="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4">
                <div>
                  <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="ml-4 flex-grow">
                  <div class="relative w-full">
                    <input
                      type="text"
                      class="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none" value={currentMessage}
                      placeholder="Type your message here   .."
                      onChange={(e) => {
                        setcurrentMessage(e.target.value);
                      }}
                    />
                    <button class="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="ml-4">
                  <button
                    class="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600"
                    onClick={sendMessage}
                    onKeyDown={(event) => {
                      event.key === "Enter" && sendMessage();
                    }}
                  >
                    <span>Send</span>
                    <span class="ml-2">
                      <svg
                        class="-mt-px h-4 w-4 rotate-45 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
