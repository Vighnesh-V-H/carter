function Button({ text, onClick, className }) {
  const style =
    '"h-9   w-full rounded-full bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-500  focus:ring-offset-2  "';

  // const styles = "bg-slate-900";

  return (
    <button className={`${style} ${className} `} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
