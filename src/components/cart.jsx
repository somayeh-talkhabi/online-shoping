import { productsContext } from "./context/product-context";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadingCart } from "./loading";

function Cart () {
  const productContext = useContext(productsContext);
  console.log(productContext.cartCount);
  

  const[isLoading, setLoading] = useState(true);


  useEffect(()=>{
      setLoading(false);
      productContext.setProduct(productContext.product);
      // console.log(productContext.cartCount.product.quantity);

  },[]);

  const totalPrice =()=>{
    let sum = 0;
    productContext.cartCount.map(p=>{
      sum = sum + (p.price)*(p.quantity);
    })
    return sum;
  }
  return (
    <div className="container-fluid">
      {isLoading ? (
        <LoadingCart />
      ) : (
        <div className="container-fluid cart-container">
          {productContext.cartCount.length === 0 ? (
            <div className=" text-center py-5">
              <h1> your basket is empty</h1>
            </div>
          ) : (
            <div className="row cart-items-container">
              <div className="col-lg-9 col-md-8 ">
                {productContext.cartCount.map((p, index) => {
                  return (
                    <div key={index} className="row cart-items">
                      <div className="col-lg-4 col-md-6">
                        <div className="image-container px-5">
                          <img
                            src={productContext.cartCount[index].image}
                            width="150px"
                            height="150px"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-6">
                        <h5 className="py-5 ">
                          {productContext.cartCount[index].title}
                        </h5>
                        <h5 className="fw-bold">
                          {(
                            productContext.cartCount[index].price *
                            productContext.cartCount[index].quantity
                          ).toFixed(2)}
                          $
                        </h5>
                        <div className="button-container d-flex flex-row">
                          <Link
                            onClick={() => {
                              productContext.addProduct(
                                productContext.cartCount[index]
                              );
                            }}
                            className="btn btn-primary "
                            to={"/cart"}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </Link>
                          <h3 className=" mx-4">
                            {productContext.cartCount[index].quantity}
                          </h3>
                          <Link
                            onClick={() => {
                              productContext.removeProduct(
                                productContext.cartCount[index]
                              );
                            }}
                            className="btn btn-primary"
                            to={"/cart"}>
                            {productContext.cartCount[index].quantity == 1 ? (
                              <i
                                className="fa fa-trash-o"
                                aria-hidden="true"></i>
                            ) : (
                              <i className="fa fa-minus" aria-hidden="true"></i>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="row border my-4 mx-1 p-3">
                  <div className="col-12">
                    <span className="total-price"> total price : </span>
                    <span className="total-price">{totalPrice().toFixed(2)}$</span>
                    <Link to={"/cheackout"} className="btn-checkout">
                      {" "}
                      check out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;