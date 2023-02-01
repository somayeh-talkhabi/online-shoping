import Navbar from "./components/navbar";
import Home from "./components/home/home";
import Products from "./components/products";
import Product from "./components/product";
import About from "./components/about";
import Contact from "./components/contact";
import Login from "./components/login";
import register from "./components/register";
import Cart from "./components/cart";
import Footer from "./components/footer";
import NotFound from "./components/not-found";
import { LoadingProducts } from "./components/loading";
import "./components/home/home.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { productsContext } from "./components/context/product-context";

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFilter] = useState(products);
  const [cartCount, setCartCount] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [userInfo, setuserInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      console.log(data);
      setProducts(data);
      setFilter(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    let newcartItem = cartCount.find((p) => p.id === product.id);
    if (newcartItem) {
      newcartItem.quantity++;
      setCartCount(cartCount);
      // const newCart = cartCount;

      // setCartCount([...cartCount ,newcartItem]);
      console.log(cartCount);
    } else {
      newcartItem = { ...product, quantity: 1 };
      console.log(newcartItem);
      console.log(cartCount);
      setCartCount([...cartCount, newcartItem]);
      // setProduct(newcartItem);
      console.log(cartCount);
    }
  };

  const addProduct = (product) => {
    let selectedProduct = cartCount.find((p) => p.id === product.id);
    console.log(selectedProduct);
    selectedProduct.quantity++;
    setCartCount(cartCount);
  };
  const removeProduct = (product) => {
    let selectedProduct = cartCount.find((p) => p.id === product.id);
    if (selectedProduct.quantity > 1) {
      selectedProduct.quantity--;
      setCartCount(cartCount);
    } else {
      const newcartCount = [...cartCount];
      const newcartItemes = newcartCount.filter((p) => p.id !== product.id);
      setCartCount(newcartItemes);
    }
  };
  return (
    <>
      <productsContext.Provider
        value={{
          products: products,
          setProducts: setProducts,
          filtered: filtered,
          setFilter: setFilter,
          cartCount: cartCount,
          addToCart: addToCart,
          addProduct: addProduct,
          removeProduct: removeProduct,
          product: product,
          setProduct: setProduct,
          userInfo: userInfo,
          setuserInfo: setuserInfo,
          errors: errors,
          setErrors: setErrors,
        }}>
        <Navbar />
        <Switch>
          <Route
            path={"/products"}
            render={() =>
              isLoading ? <LoadingProducts /> : <Products />
            }></Route>

          <Route path={"/product/:id"} component={Product}></Route>
          <Route path={"/about"} component={About}></Route>
          <Route path={"/contact"} component={Contact}></Route>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/register"} component={register}></Route>
          <Route path={"/cart"} component={Cart}></Route>
          <Route path={"/not-found"} component={NotFound}></Route>
          <Route path={"/home"} component={Home}></Route>
          <Route path={"/"} exact component={Home}></Route>
          <Redirect to={"/not-found"}></Redirect>
        </Switch>
        <Footer />
      </productsContext.Provider>
      {/* <Navbar />
      <Switch>
        <Route path={"/products"} render= {(props)=><Products userName={name} />}></Route>
        <Route path={"/about"} component={About}></Route>
        <Route path={"/contact"} component={Contact}></Route>
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/register"} component={register}></Route>
        <Route path={"/cart"} component={Cart}></Route>
        <Route path={"/home"} component={Home}></Route>
        <Route path={"/"} exact component={Home}></Route>
      </Switch> */}
    </>
  );
}

export default App;
