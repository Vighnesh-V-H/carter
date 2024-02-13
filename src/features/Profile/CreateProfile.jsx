import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { createProfile } from './profileSlice';
import Button from '../../ui/Button';

function CreateProfile() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state) => state.profile.userName);

  const center =
    'absolute top-1/2 left-1/2 -translate-y-2/4	-translate-x-1/2 inline-block';

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(createProfile(username));
    navigate('/app');
  }

  return (
    <div className={center}>
      {!userName ? (
        <div className="flex flex-col justify-center gap-6 align-middle">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-8 rounded-full fill-black pl-4 text-lg text-black focus:outline-none  focus:outline-4 focus:outline-green-500 sm:w-64   "
              // style={{ color: "black" }}
            />
          </form>
          {
            <Button
              text={'Continue To App'}
              onClick={handleSubmit}
              className="pb-4 pt-4 text-white"
            />
          }
        </div>
      ) : (
        <div>
          <Link to="/app">Continue {userName}</Link>
        </div>
      )}
    </div>
  );
}

export default CreateProfile;
