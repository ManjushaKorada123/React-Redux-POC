import React from "react";
import { connect } from "react-redux";
import Header from "./Container/Header";

const Order = ({ordersList}) => {
  return (
    <div>
      <Header/>
     <center>
        {ordersList.length > 0 ? (
          <div className="container">
            <div className="row">
              {ordersList.map((item,index) => (
                <div
                  className="col-md-4"
                  style={{ padding: "5px" }}
                  key={index}
                >
                  <div
                    className="card"
                    style={{ width: "18rem", padding: "3px" }}
                  >
                    <img src={item.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Rs.{item.prize}</p>
                      <p>Table Number : {item.table_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h4">
            No Orders Placed Yet
          </div>
        )}
      </center>
    </div>
  );
};

const mapStateToProp = (state) => ({
  ordersList: state.orderReducer  
});

export default connect(mapStateToProp)(Order);
