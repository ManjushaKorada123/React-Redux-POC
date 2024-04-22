import React from "react";
import { connect } from "react-redux";
import { setTableNumberAction } from "../Actions";

const Table = ({ table_number, setTableNumberAction }) => {
  const numbers = Array.from({ length: 16 }, (_, i) => i + 1);
  let inActiveBtn = "btn btn-outline-primary m-2";
  let activeBtn = "btn btn-outline-primary m-2 active";
  return (
    <div>
      <center className="mt-2">
        <h4>Please select your table number</h4>
        {numbers.map((num, index) => (
          <div style={{ display: "inline" }} key={index}>
            <button
              className={table_number === num ? activeBtn : inActiveBtn}
              onClick={() => setTableNumberAction(num)}
            >
              {num}
            </button>
          </div>
        ))}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  table_number: state.tableReducer.table_number,
});
export default connect(mapStateToProps, { setTableNumberAction })(Table);
