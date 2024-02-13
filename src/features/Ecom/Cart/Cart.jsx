import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.css';
import { useState } from 'react';
import {
  clearCart,
  getCurrentQuantityById,
  getTotalCartPrice,
} from './cartSlice';
import CartItem from './CartItem';
import { MdDeleteForever } from 'react-icons/md';
import LinkButton from '../../../ui/LinkButton';
import Button from '../../../ui/Button';

function Cart() {
  const image = useSelector((state) => state.cart.image);
  const products = useSelector((state) => state.cart.products);
  const quantity1 = useSelector((state) => state.cart.products);

  const totalCartPrice = useSelector(getTotalCartPrice);

  const dispatch = useDispatch();

  console.log(products);

  const [quantity, setQuantity] = useState(1);

  function handlePlus(id) {
    // setQuantity((q) => q + 1);
    getCurrentQuantityById(id);

    console.log(id);
  }

  function handleClearCart() {
    if (window.confirm('Remove all items into your cart?')) {
      dispatch(clearCart());
    } else {
      // alert('No');
    }
  }

  if (products.length === 0)
    return (
      <div>
        <LinkButton to={'/products'} content={''} />
        Add any item in cart
      </div>
    );

  return (
    <div className=" flex flex-col gap-2 md:flex-row">
      <div className="ml-5 mr-5 mt-10   small:w-[60vw]">
        <div className=" flex h-16 items-center  justify-between bg-neutral-800 p-0 text-white small:pl-5 small:pr-10  ">
          <div> Total Items {products.length} </div>
          <div
            className="flex cursor-pointer items-center gap-1 rounded-md bg-red-500 p-1 text-white hover:bg-red-600"
            onClick={handleClearCart}
          >
            <MdDeleteForever />
            <h4>Empty Cart</h4>
          </div>
        </div>
        <div className="flex flex-col gap-10 border border-slate-950 bg-white">
          {products.map((product) => (
            <CartItem
              product={product}
              length={products.length}
              key={product.id}
            />
          ))}
        </div>
      </div>
      <div className="m-auto mt-16 flex flex-col gap-4">
        <div>
          {products.map((product, i) => (
            <div className=" flex flex-col gap-4" key={i}>
              <h1 className="font-sm text-md flex justify-between small:text-lg md:w-[30vw] md:text-xl">
                {product.title}
                <strong className="ml-4">x{product.quantity}</strong>
              </h1>
              <hr className=" h-[2px] w-5/6 bg-green-700" />
            </div>
          ))}
        </div>
        <h1 className="flex justify-between text-2xl font-medium">
          Total Price <strong className="">${totalCartPrice}</strong>
        </h1>

        <Button text={'BUY NOW'} className={'text-white'} />
      </div>
    </div>
  );
}

export default Cart;
