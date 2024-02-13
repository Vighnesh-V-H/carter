import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import CreateProfile from '../features/Profile/CreateProfile';
import Header from './Header';
import ProfileName from '../features/Profile/ProfileName';
import Home from './Home';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      {isLoading && <Loader />}
      <div className="flex items-center justify-between">
        <Header />
        {/* <NavLink to='/profile'>
          <ProfileName />
        </NavLink> */}
      </div>

      {/* <Home /> */}

      <Outlet />
    </div>
  );
}

export default AppLayout;
