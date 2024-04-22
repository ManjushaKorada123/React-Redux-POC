import React from "react";
import { connect } from "react-redux";
import {setFilterAction,resetFilterAction} from '../Actions';

const Filter = ({filter_name,setFilterAction,resetFilterAction}) => {
  const prod = [
    "All Items",
    "Rice Items",
    "Cool Drinks",
    "Pizza",
    "Hot Drinks",
  ];
 // const [filter, setFilter] = React.useState(prod[0]);
  return (
    <div>
      <center className="mt-2">
        <span className="h4 m-1">Filter</span>
        <select name="Filter" className="p-1" onChange={(e) => setFilterAction(e.target.value)}>
          {prod.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        {/* <button className="btn btn-sm btn-primary m-2">Submit</button> */}
      </center>
    </div>
  );
};

const mapStateToProps = (state) =>({
filter_name : state.filterReducer.filter_name
})

export default connect(mapStateToProps,{setFilterAction,resetFilterAction})(Filter);
