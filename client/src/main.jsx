import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./components/Redux/store.js";
import { Provider } from "react-redux";
import Home from "./components/Home.jsx";
// import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import { ShowCart } from "./components/ShowCart.jsx";
import Error from "./components/Error.jsx";

const ProductList = lazy(() => import("./components/ProductList.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/ProductList",
    element: (
      <Suspense fallback={<div className="text-4xl">Loading...</div>}>
        <ProductList />
      </Suspense>
    ),
  },
  {
    path: "/ProductList/ProductItem/:id",
    element: <ProductDetail />,
  },
  {
    path: "/ProductList/cartItem",
    element: <Cart />,
    children: [
      {
        path: "/ProductList/cartItem",
        element: <ShowCart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter}>
      <StrictMode>
        <App />
      </StrictMode>
    </RouterProvider>
  </Provider>
);
