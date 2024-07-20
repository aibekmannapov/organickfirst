import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";
import Products from "./components/Products";
import ProductDeteils from "./components/ProductDeteils";
import Basket from "./components/Basket";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/createProduct",
      element: <CreateProduct />,
    },
    {
      id: 3,
      link: "/products",
      element: <Products />,
    },
    {
      id: 4,
      link: "/productDeteils/:proId",
      element: <ProductDeteils />,
    },
    {
      id: 5,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 6,
      link: "/about",
      element: <About />,
    },
    {
      id: 7,
      link: "/news",
      element: <News />,
    },
  ];
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
