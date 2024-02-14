import { NavLink } from 'react-router-dom';
import ProfileName from '../features/Profile/ProfileName';
import Footer from './Footer';

function Header() {
  // {}
  return (
    <div
      className="flex  w-full items-center justify-between  bg-backGround p-3 pl-5 pr-5 text-white"
      id="header"
    >
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <h1 className="text-4xl">Carter</h1>
        </NavLink>
        <span className=" text-base">
          - By
          <a
            href="https://twitter.com/Vighnesh_V_H"
            target="_blank"
            className="text-opacity-45 hover:text-black"
          >
            --Vighnesh
          </a>
        </span>
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
