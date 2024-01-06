export const addToCompare = id => dispatch => {
    return fetch(`/api/product/${id}`)
      .then(res => res.json())
      .then(({ products }) => {
        dispatch({
          type: "ADD_TO_COMPARE",
          product: products
        });
      });
  };
  
  export const removeFromCompare = id => dispatch =>
    dispatch({ type: "REMOVE_FROM_COMPARE", id });
  