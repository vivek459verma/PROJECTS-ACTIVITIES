import React, { useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import ProductCard from "./ProductCard";
import { initCatalog } from "../store/actions/catalogActions";

const Catalog = memo(() => {
  const { products } = useSelector(state => state.catalog, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(initCatalog());
    }
  }, [dispatch, products]);
  return (
    <div className="products">
      {products &&
        products.map(product => <ProductCard key={product.id} {...product} />)}
    </div>
  );
});

export default Catalog;
