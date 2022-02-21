import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Tick from "../../images/animatedtick.gif"
import topbar from "topbar";
import TopLoaderBar from "../TopLoaderbar/TopLoaderBar";

const OrderSuccess = () => {
  TopLoaderBar()
  return (
    <div className="orderSuccess">
      {topbar.show()}
     <img src={Tick} alt="Success" className="Success"/> 

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
      {topbar.hide()}
    </div>
  );
};

export default OrderSuccess;
