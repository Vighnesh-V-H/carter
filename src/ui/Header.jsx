import { NavLink } from 'react-router-dom';
import ProfileName from '../features/Profile/ProfileName';

function Header() {
  // {}
  return (
    <div
      className="bg-backGround  flex w-full items-center  justify-between p-3 pl-5 pr-5 text-white"
      id="header"
    >
      <div>
        <NavLink to="/">
          <h1 className="text-4xl">Carter</h1>
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile">
          <ProfileName />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
