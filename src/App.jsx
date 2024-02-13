import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Application from './ui/Application';
import Profile from './features/Profile/Profile';
import ChatLayout, { loader as chatLoader } from './features/Chat/ChatLayout';
import Products, {
  loader as productLoader,
} from './features/Ecom/Products/Products';
import ProductDetail, {
  loader as productDetailLoader,
} from './features/Ecom/Products/ProductDetail';
import Cart from './features/Ecom/Cart/Cart';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/app',
          element: <Application />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/chats',
          element: <ChatLayout />,
          loader: chatLoader,
        },
        {
          path: '/products',
          element: <Products />,
          loader: productLoader,
        },
        {
          path: '/products/:id',
          element: <ProductDetail />,
          loader: productDetailLoader,
        },

        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
