import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { productDetails } from "../store/actions/catalogActions";
import { getImage } from "../server";

const Product = memo(() => {
  const { selected } = useSelector(state => state.catalog, shallowEqual);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails(id));
  }, [id, dispatch]);

  return (
    selected && (
      <div className="product-details">
        <h1>{selected.model}</h1>
        <h3>by {selected.brand}</h3>
        <img src={getImage(selected.image)} alt={selected.model} />
        <ul className="details">
          <li>Rear Camera : {selected.rear_camera}</li>
          <li>Front Camera : {selected.front_camera}</li>
          <li>Screen : {selected.screen}</li>
          <li>Storage : {selected.storage}</li>
          <li>Os : {selected.os}</li>
          <li>Cost: ${selected.cost}</li>
        </ul>
      </div>
    )
  );
});

export default Product;
