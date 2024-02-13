import { useSelector } from "react-redux";
import CreateProfile from "../features/Profile/CreateProfile";
import Header from "./Header";
import ProfileName from "../features/Profile/ProfileName";
import { NavLink } from "react-router-dom";

function Home() {
  const userName = useSelector((state) => state.profile.userName);
  console.log(userName);

  return (
    <div className='relative h-80 '>
      {/* <div className='flex justify-between pl-6 pr-6'>
        <Header />
        <NavLink to='/profile'>
          <ProfileName />
        </NavLink>
      </div> */}
      <CreateProfile />
    </div>
  );
}

export default Home;
