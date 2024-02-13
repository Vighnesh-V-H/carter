import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { IoStarHalfSharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import Button from '../../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentQuantityById,
  setImage as setCartImage,
  setName,
  setProducts,
} from '../Cart/cartSlice';
import { useState } from 'react';

function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useLoaderData();
  const navigate = useNavigate();

  const id = useParams();
  const [isAdded, setIsAdded] = useState(false);
  const currentQuantity = useSelector(getCurrentQuantityById(productDetail.id));

  function handleClick() {
    setIsAdded((a) => !a);

    if (!isInCart) {
      dispatch(setCartImage(productDetail.image));
      dispatch(
        setProducts({ ...productDetail, quantity: 1, addedToCart: false }),
      );
      dispatch(setName(productDetail.title));
    } else {
      navigate('/cart');
    }
  }

  const isInCart = currentQuantity > 0;

  return (
    <div className=" flex-col items-center justify-center overflow-x-hidden bg-white sm:p-5">
      <div className="relative m-auto flex h-fit flex-col items-center gap-3 border-2 border-slate-100 bg-gray-50 pt-6 sm:flex-row sm:items-start sm:p-7  ">
        <img
          src={productDetail.image}
          alt={productDetail.title}
          className="h-2/4 w-4/5 small:h-3/5 small:w-2/5 sm:h-3/4 sm:w-3/5 "
        />
        <>
          <div className="flex h-full w-full flex-col items-center gap-3 text-center sm:items-start sm:gap-4 sm:text-start">
            <h1 className=" font-semibold sm:text-2xl lg:text-3xl ">
              {productDetail.title}
            </h1>
            <h2 className=" font-bold sm:text-2xl lg:text-4xl ">
              ${productDetail.price}
            </h2>
            <div className="flex gap-2">
              <div className=" ml-auto mr-auto flex w-14 items-center bg-green-600 pl-2  text-white sm:m-0">
                {productDetail.rating.rate}
                {productDetail.rating.rate > 4 ? (
                  <IoIosStar />
                ) : (
                  <IoStarHalfSharp />
                )}
              </div>
              <h5 className="text-md font-semibold text-slate-400">
                {productDetail.rating.count} Ratings
              </h5>
            </div>
            <div className="mt-4 flex flex-col-reverse gap-2 small:mt-14 small:w-[40vw] small:gap-[1rem]">
              <Button
                text={'Buy Now'}
                className=" w-[50vw] bg-green-600 text-white small:w-[40vw]"
              ></Button>
              {
                <Button
                  text={`${!isInCart ? 'Add To Cart' : 'Go To Cart'} `}
                  className={` w-[50vw]  text-white small:w-[40vw] ${!isInCart ? 'bg-green-600' : ' bg-neutral-800 hover:bg-neutral-700 '} `}
                  onClick={handleClick}
                ></Button>
              }
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

async function loader({ params }) {
  const id = params.id;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  console.log(data);

  return data;
}

export { loader };

export default ProductDetail;
