import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Messages from './Messages';
import Images from './Images';
import { clearMessages, pushMessages } from './chatSlice';
import LinkButton from '../../ui/LinkButton';

function Chat({ clicked, setClicked }) {
  const name = useSelector((state) => state.chatName.name);
  const image = useSelector((state) => state.chatName.image);

  const [message, setMessage] = useState('');
  const [messageData, setMessageData] = useState({});
  const chatContainerRef = useRef(null);

  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chatName.messages);

  function handleSubmit(e) {
    e.preventDefault();
    // setMessage({ ...messages , time:formattedTime} , );
    const currentTime = new Date();
    // Get the current hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    // Format the time in a human-readable string
    const formattedTime = `${hours}:${minutes > 10 ? minutes : '0' + minutes}`;

    if (message !== '') {
      setMessageData({ message, time: formattedTime });
      dispatch(pushMessages({ message, time: formattedTime }));
    }
    setMessage('');
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  useEffect(
    function () {
      const input = document.querySelector('input');

      input?.focus();
      dispatch(clearMessages());
    },
    [name],
  );
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!name || !clicked)
    return (
      <div className="absolute left-1/2 top-1/2  -translate-y-1/2">
        Select A chat To Get stared
      </div>
    );
  console.log(clicked);

  return (
    <div className={`relative -z-20  h-chat sm:block  lg:h-message`}>
      <div className="z-20 flex h-16 w-full items-center gap-2 bg-gray-400 pl-5 ">
        <LinkButton to={'/chats'} onClick={() => setClicked(false)} />
        <div className=" relative h-14 w-14 overflow-hidden rounded-full">
          <img
            src={image}
            alt={name}
            className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 hover:brightness-75 group-hover:brightness-75 "
          />
        </div>
        <h1 className="cursor-default text-2xl font-bold">{name}</h1>
      </div>
      {/* display message */}

      <div
        className="absolute bottom-16 right-0 -z-10 flex h-textResp w-full flex-col items-end gap-1 overflow-y-scroll pr-5 lg:h-[69vh]"
        ref={chatContainerRef}
      >
        {messages.map((message, i) =>
          // <Messages message={message} key={i} />
          message.message === '' ? null : (
            <div
              key={i}
              className=" relative w-fit rounded bg-slate-100 pb-3  pr-6 pt-3 text-white"
            >
              <Messages message={message} key={i} />
            </div>
          ),
        )}
        {/* {photo && <img src={URL.createObjectURL(photo)} alt="" />} */}
      </div>

      {/* input */}
      <div className="absolute bottom-0 flex w-full items-center border-t border-gray-300 p-2">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 cursor-pointer text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5l7 7-7 7M5 12h14"
            />
          </svg>
        </div>
        <div className="ml-4 flex-1">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a message"
              className="w-full rounded-full border px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
              value={message}
              // onChange={(e) => setMessage(e.target.value)}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="flex-shrink-0">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
