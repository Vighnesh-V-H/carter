import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Application() {
  const userName = useSelector((state) => state.profile.userName);
  const navigate = useNavigate();
  const welcome = 'absolute top-24	left-9 ';

  const centre =
    'absolute top-1/2 left-1/2 -translate-y-2/4	-translate-x-1/2 inline-block';

  // useEffect(
  //   function () {
  //     if (!userName) navigate("/");
  //   },
  //   [userName]
  // );

  return (
    <div className=" text-xl font-medium  text-black ">
      <div className={welcome}> Hi There {userName}</div>
      <div className={centre}>
        <div className="flex flex-col gap-3">
          <Link to="/chats">
            <div className="w-full rounded-full bg-green-600 pb-2 pl-4 pr-4 pt-2 text-center text-white hover:bg-green-800">
              Go to Chat
            </div>
          </Link>
          <Link to="/products">
            <div className="w-full rounded-full bg-green-600 pb-2 pl-5 pr-5 pt-2 text-center text-white hover:bg-green-800">
              See Products
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Application;
