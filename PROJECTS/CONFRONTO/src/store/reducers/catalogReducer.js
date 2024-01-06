const initState = {
    products: [],
    selected: null
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      case "INITIALIZE_CATALOG": {
        return {
          selected: null,
          products: action.products
        };
      }
      case "PRODUCT_DETAILS": {
        return {
          ...state,
          selected: action.selected
        };
      }
      default: {
        return state;
      }
    }
  };
  