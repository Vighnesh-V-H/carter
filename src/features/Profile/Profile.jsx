import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPencil } from 'react-icons/fa6';
import { TiPencil } from 'react-icons/ti';
import { MdThumbUpAlt } from 'react-icons/md';

function Profile() {
  const userName = useSelector((state) => state.profile.userName);
  const [edit, setEdit] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  function handleClick(e) {
    inputRef.current.click();
  }

  function handleEdit(e) {
    e.preventDefault();
    setEdit((edit) => !edit);
    console.log(e.target.siblingNode);
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        // Set the image data URL to the state
        setProfilePic(event.target.result);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="mt-5 flex h-full w-full flex-col items-center justify-center gap-2">
      <div
        className="group relative h-40 w-40 overflow-hidden rounded-full bg-red-500   "
        onClick={handleClick}
      >
        <img
          src={profilePic}
          alt=""
          className=" absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 group-hover:brightness-0 "
        />
        <form onSubmit={handleEdit}>
          <input
            type="file"
            className=" hidden"
            id="imageinput"
            ref={inputRef}
            accept=".jpg, .png"
            onChange={handleFileUpload}
          ></input>
        </form>
        <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white opacity-0 group-hover:opacity-90">
          <FaPencil />
        </h4>
      </div>
      <div className="flex gap-3 text-4xl font-bold ">
        <h1 contentEditable={edit}>{userName}</h1>
        <h3 className="text-md" onClick={handleEdit}>
          {!edit ? <TiPencil /> : <MdThumbUpAlt />}
        </h3>
      </div>
    </div>
  );
}

export default Profile;
