import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ to, content, onClick }) {
  const navigate = useNavigate();
  return (
    <Link to={to}>
      <button className="text-3xl" onClick={onClick}>
        &larr;
      </button>
    </Link>
  );
}

export default LinkButton;
