import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  decreaseItemQuantity,
  deleteItem,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';
import { MdDeleteForever } from 'react-icons/md';

function CartItem({ product, length }) {
  const currentQuantity = useSelector(getCurrentQuantityById(product.id));

  const dispatch = useDispatch();

  function handlePlus(id) {
    dispatch(increaseItemQuantity(id));
  }
  function handleMinus(id) {
    if (currentQuantity > 1) dispatch(decreaseItemQuantity(id));
  }

  function handleDelete(id) {
    if (window.confirm('Remove all items into your cart?')) {
      dispatch(deleteItem(product.id));
    } else {
      // alert('No');
    }
  }

  return (
    // <div className="ml-5 mr-5 mt-10 flex flex-col  bg-slate-400 ">

    <>
      <div
        key={product.id}
        className={`relative ml-6 flex w-[65vw] gap-4  pr-4`}
      >
        {/* <div>delete</div> */}
        <img src={product.image} alt="" className="h-[30vh] w-1/4" />
        <div className="flex flex-col justify-between">
          <h1 className="w-4/5 text-sm font-semibold small:text-lg sm:text-2xl ">
            {product.title.length > 40
              ? product.title.slice(0, 40)
              : product.title}
            {product.title.length > 40 ? (
              <span className="text-blue-500">...</span>
            ) : (
              ''
            )}
          </h1>
          <div className="-mt-2 flex gap-2">
            <div
              className={`h-8 w-12 cursor-pointer bg-slate-400 text-center text-xl  font-semibold selection:bg-none ${currentQuantity === 1 ? 'cursor-not-allowed opacity-45' : ''}`}
              onClick={() => handleMinus(product.id)}
            >
              -
            </div>
            <span className="mr-2 w-8 bg-slate-400  text-center">
              {product?.quantity}
            </span>
            <div
              onClick={() => handlePlus(product.id)}
              className="h-8 w-12 cursor-pointer bg-slate-400 text-center text-xl font-semibold selection:bg-none"
            >
              +
            </div>
          </div>
          <div className="flex w-full gap-[10vw]">
            <h2
              className="cursor-pointer rounded bg-red-500 p-1 text-sm text-white hover:bg-red-600 "
              onClick={handleDelete}
            >
              Remove
            </h2>
            <h2 className="text-xl font-bold">${product.price}</h2>
          </div>
        </div>
      </div>

      {/* <hr className="" />/ */}
    </>

    // </div>
  );
}

export default CartItem;
