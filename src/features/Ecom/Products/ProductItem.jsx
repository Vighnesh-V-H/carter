import { useNavigate, useNavigation } from 'react-router-dom';
import Loader from '../../../ui/Loader';

function ProductItem({ product }) {
  const navigate = useNavigate();
  function handleClick() {
    // console.log(product.id);
    navigate(`/products/${product.id}`);
  }

  return (
    <>
      <div
        className="group relative flex min-h-40 cursor-pointer gap-4 bg-gray-100 bg-opacity-30 font-medium small:text-xl sm:m-auto sm:h-72 sm:w-5/6   "
        onClick={handleClick}
      >
        <img src={product.image} alt={product.title} className="h-full w-1/4" />
        <div>
          <h1 className="text-sm group-hover:text-green-600  small:text-xl sm:text-lg  ">
            {product.title.trim(0, 30)}
            <span className=" text-blue-600">...</span>
          </h1>
        </div>
        <h2 className="absolute bottom-0 right-8 text-lg font-bold sm:top-1/2 sm:-translate-y-1/2  sm:text-2xl">
          ${product.price}
        </h2>
      </div>
    </>
  );
}

export default ProductItem;
