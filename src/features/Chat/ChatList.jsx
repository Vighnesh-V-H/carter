import { useDispatch } from 'react-redux';
import { openChat, setImage } from './chatSlice';
import { useEffect, useRef, useState } from 'react';

function ChatList({ chatList, i, clicked }) {
  const dispatch = useDispatch();
  // console.log(i);
  const [selected, setSelected] = useState(false);

  function handleClick(e) {
    // setSelected((select) => !select);

    dispatch(openChat(`${chatList.name.first} ${chatList.name.last}`));
    dispatch(setImage(chatList.picture.large));

    // const clickedElement = e.target;
    // const closestDiv = clickedElement.closest('.group');

    // if (selected) {
    //   closestDiv.classList.add('bg-slate-700');
    //   closestDiv.classList.add('bg-opacity-15');
    // }
  }

  return (
    <div
      tabIndex={0}
      className={`group mb-2 cursor-pointer pb-3 pt-3 hover:bg-slate-700 hover:bg-opacity-15 focus:bg-slate-700 focus:bg-opacity-15  ${clicked ? 'hidden' : ''} `}
      onClick={handleClick}
    >
      <div className="flex gap-2">
        <div className=" relative h-16 w-16 overflow-hidden rounded-full">
          <img
            src={chatList.picture.large}
            alt=""
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <span className="flex flex-col">
          <h1>{`${chatList.name.first} ${chatList.name.last}`}</h1>
          <h3 className="ml-1 text-gray-600 text-opacity-60">Hii</h3>
        </span>
      </div>
    </div>
  );
}

export default ChatList;
