import { useSelector } from 'react-redux';

function ProfileName() {
  const userName = useSelector((state) => state.profile.userName);
  // console.log(userName);

  return (
    <div>
      <h1 className="text-xl">{userName}</h1>
    </div>
  );
}

export default ProfileName;
