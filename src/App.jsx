import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import BooksGridPage from './pages/BooksGridPage';
import BookDetailsPage from './pages/BookDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import RootLayout from './pages/Root';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/books',
        element: <BooksGridPage />,
      },
      {
        path: '/books/:bookId',
        element: <BookDetailsPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
