export const initCatalog = () => dispatch => {
    return fetch("/api/products")
      .then(res => res.json())
      .then(products => {
        dispatch({
          type: "INITIALIZE_CATALOG",
          products
        });
      });
  };
  
  export const productDetails = id => dispatch => {
    return fetch(`/api/product/${id}`)
      .then(res => res.json())
      .then(({ products }) => {
        dispatch({
          type: "PRODUCT_DETAILS",
          selected: products
        });
      });
  };
  