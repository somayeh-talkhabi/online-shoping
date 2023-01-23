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
  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <LoadingCart />
        ) : (
          <div className="container">
            {productContext.cartCount.length === 0 ? (
              <div className="row text-center py-5">
                <h1> your basket is empty</h1>
              </div>
            ) : (
            
              <div className="row">
                {
                  productContext.cartCount.map((p,index)=>{
                    return (
                      <div key={index} className="row">
                        <div className="col-6">
                          <div className="image-container">
                            <img
                              src={productContext.cartCount[index].image}
                              width="400px"
                              height="400px"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <h5 className="py-5 ">
                            {productContext.cartCount[index].title}
                          </h5>
                          <h5 className="fw-bold">
                            {productContext.cartCount[index].price} $
                          </h5>
                          <div className="button-container d-flex flex-row">
                            <Link className="btn btn-dark " to={"/cart"}>
                              <i class="fa-solid fa-plus-large"></i>
                            </Link>
                            <h1 className=" mx-4">
                              {productContext.cartCount[index].quantity}
                            </h1>
                            <Link className="btn btn-dark" to={"/cart"}>
                              remove
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
               
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;