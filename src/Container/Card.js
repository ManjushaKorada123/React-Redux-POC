import React from "react";
import { connect } from "react-redux";
import { addOrderAction, resetFilterAction, resetTableNumberAction } from "../Actions";

const Card = ({ filter_name, table_number, addOrderAction }) => {
  const [data, setData] = React.useState([]);
  const [cloneData, setCloneData] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
        setCloneData(json.items);
      });
  }, []);

  React.useEffect(() => {
    if (filter_name !== "All Items") {
      let filteredData = cloneData.filter((e) => e.category === filter_name);
      setData(filteredData);
    } else {
      setData(cloneData);
    }
  }, [filter_name]);

  const OrderHandler = async (id,name,prize,url) => {
    if(table_number !== null){
      await addOrderAction(id,name,prize,url,table_number)
      await resetFilterAction();
      await resetTableNumberAction();
      alert('Order Placed Successfully');
    }else{
      alert('Please select the table number')
    }
  }
  return (
    <div>
      <center>
        {data.length > 0 ? (
          <div className="container">
            <div className="row">
              {data.map((item) => (
                <div
                  className="col-md-4"
                  style={{ padding: "5px" }}
                  key={item.id}
                >
                  <div
                    className="card"
                    style={{ width: "18rem", padding: "3px" }}
                  >
                    <img src={item.url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Rs.{item.prize}</p>
                      <button className="btn btn-primary" onClick={()=> OrderHandler(item.id,item.name,item.prize,item.url,table_number)}>Order</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="spinner-border text-primary"></div>
        )}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterReducer.filter_name,
  table_number: state.tableReducer.table_number
});

export default connect(mapStateToProps,{addOrderAction})(Card);
