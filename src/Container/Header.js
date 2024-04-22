import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({TotalOrder}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href={'/'}>Restaurant</a>
        <button className="btn btn-primary">
         <Link to='/orders' style={{color : "white", textDecoration:'none'}}> Orders </Link><span className="badge text-bg-secondary">{TotalOrder}</span>
        </button>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) =>({
  TotalOrder : state.orderReducer.length
})
export default connect(mapStateToProps)(Header);
//Object.keys(state.orderReducer).length