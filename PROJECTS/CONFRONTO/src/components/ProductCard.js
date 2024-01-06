import React from "react";
import { getImage } from "../server";
import { useDispatch } from "react-redux";
import { addToCompare } from "../store/actions/compareActions";
import { useHistory } from "react-router-dom";

const ProductCard = ({ id, brand, model, image }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const showProductDetail = () => history.push(`/product/${id}`);
  return (
    <div className="product-card">
      <img onClick={showProductDetail} src={getImage(image)} alt={model} />
      <p>{brand}</p>
      <h3>{model}</h3>
      <button onClick={() => dispatch(addToCompare(id))}>Add to Compare</button>
    </div>
  );
};

export default ProductCard;
