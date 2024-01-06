const initState = {
    products: []
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      case "ADD_TO_COMPARE": {
        return {
          products: !state.products.some(({ id }) => id === action.product.id)
            ? [...state.products, action.product]
            : state.products
        };
      }
      case "REMOVE_FROM_COMPARE": {
        return {
          products: state.products.filter(product => product.id !== action.id)
        };
      }
      default: {
        return state;
      }
    }
  };
  