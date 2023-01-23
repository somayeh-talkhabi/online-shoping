import { productsContext } from "./context/product-context";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./../../src/app.css";
import { LoadingProduct } from "./loading";

function Product(props) {
  const [isLoading, setLoading] = useState(true);

  const productContext = useContext(productsContext);
  console.log(productContext.product);
  console.log(props.match.params.id);
  const productId = props.match.params.id;

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      const selectedProduct = response.data;
      productContext.setProduct(selectedProduct);
      setLoading(false);
      console.log(productContext.product);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-6">
          <div className=" image-container d-flex justify-content-center align-items-center w-100">
            <img
              src={productContext.product.image}
              className="product-image h-100"
              alt=""
            />
          </div>
        </div>
        <div className="col-6 d-flex flex-column align-items-center py-5">
          <h4>{productContext.product.category}</h4>
          <h5 className="py-3">{productContext.product.title}</h5>
          <h6>{productContext.product.description}</h6>
          <div className="d-flex justify-content-center py-5">
            <Link
              to={`/product/${productContext.product.id}`}
              onClick={() => {
                productContext.addToCart(productContext.product);
              }}
              className="btn btn-primary mx-2">
              add to cart
            </Link>
            <Link to={"/cart"} className="btn btn-primary">
              go to cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container ">
        <div className="row h-100">
          {isLoading ? <LoadingProduct /> : <ShowProduct />}
        </div>
      </div>

      {/* {productContext.products.filter(p => p.id === productId.id).map(p=>{
                return (
                    <div key={p.id} className="container">
                        <h1>product</h1>
                    </div>
                )
            })} */}
    </>
  );
}

export default Product;
