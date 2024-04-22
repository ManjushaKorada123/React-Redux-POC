const initialState = {
    filter_name: 'All Items',
  };
  
  export default function filterReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "SETFILTERNAME":
        return { ...state, filter_name: payload };
      case "RESETFILTERNAME":
        return { ...state, filter_name: 'All Items' };
      default:
        return state;
    }
  }
  