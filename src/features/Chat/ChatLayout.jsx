import { useLoaderData } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import ChatList from './ChatList.Jsx';
import Chat from './Chat';
import { useState } from 'react';

function ChatLayout() {
  const chats = useLoaderData();

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  // console.log(chats);
  // console.clear();
  // function handleClick(e) {
  //   // console.log(e.target);
  //   console.log(Array.from(e.target.parentNode.parentNode.children));
  // }

  return (
    <>
      <div className={`flex`}>
        <div
          className={` ${clicked ? 'hidden' : 'sm:w-[30rem]'} w-full border-r-2 border-r-black border-opacity-70`}
        >
          {/* <h1 className="mb-5 text-2xl font-bold">Chats</h1> */}
          <div
            className="h-chatSm  overflow-y-scroll text-xl font-medium text-slate-900 lg:h-chat"
            onClick={handleClick}
            id="chatlist"
            // onClick={handleClick}
          >
            {chats.map((chatList, i) => (
              <ChatList
                chatList={chatList}
                key={i}
                i={i}
                clicked={clicked}
                setClicked={setClicked}
              />
            ))}
          </div>
        </div>
        <div
          className={`${clicked ? 'block' : 'hidden'} z-30  w-full sm:block`}
        >
          <Chat clicked={clicked} setClicked={setClicked} />
        </div>
      </div>
    </>
  );
}

async function loader() {
  const res = await fetch('https://randomuser.me/api/?results=10');
  const data = await res.json();

  return data.results;
}

export { loader };

export default ChatLayout;
