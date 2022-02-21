import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

import topbar from "topbar";
import TopLoaderBar from "../TopLoaderbar/TopLoaderBar";
const Home = () => {
 TopLoaderBar();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  

  return (
    <Fragment>
      {loading ? (
        <Loader /> 
        
        ) : (
          <Fragment>
          {topbar.show()}
          <MetaData title="BuyArc" />

          <div className="banner">
            <p>Welcome to  <span>B</span>uy <span>A</span>rc   </p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
 
            {/* <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a> */}
          </div>
       
         

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
           
          </div>
             
          {topbar.hide()}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
