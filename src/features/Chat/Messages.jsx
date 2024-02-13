function Messages({ message }) {
  // Create a new Date object
  const currentTime = new Date();

  // Get the current hours, minutes, and seconds
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Format the time in a human-readable string
  const formattedTime = `${hours}:${minutes > 10 ? minutes : '0' + minutes}`;

  return (
    <div className="w-fit rounded pl-4 pr-4 text-lg font-normal text-black">
      {message.message}
      <span className="absolute bottom-0 right-0 text-xs font-thin">
        {message.time}
      </span>
    </div>
  );
}

export default Messages;
