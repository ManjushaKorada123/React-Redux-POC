export const setTableNumberAction = (value) => async (dispatch) => {
  dispatch({
    type: "SETTABLENUMBER",
    payload: value,
  });
};

export const resetTableNumberAction = () => async (dispatch) => {
  dispatch({
    type: "RESETTABLENUMBER",
  });
};

export const setFilterAction = (value) => async (dispatch) => {
  dispatch({
    type: "SETFILTERNAME",
    payload: value,
  });
};

export const resetFilterAction = () => async (dispatch) => {
  dispatch({
    type: "RESETFILTERNAME",
  });
};

export const addOrderAction =
  (id, name, prize,url,table_number) => async (dispatch) => {
    dispatch({
      type: "ADDORDER",
      payload: {
        id: id,
        name: name,
        prize: prize,
        table_number: table_number,
        url:url
      }
    });
  };
