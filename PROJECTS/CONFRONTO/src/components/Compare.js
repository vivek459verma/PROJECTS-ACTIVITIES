import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getImage } from "../server";
import { removeFromCompare } from "../store/actions/compareActions";

const Compare = memo(() => {
  const { products } = useSelector(state => state.compare, shallowEqual);
  const dispatch = useDispatch();
  return products && products.length > 0 ? (
    <div className="comparison-grid">
      <div className="feature-labels">
        <div></div>
        <div>Brand</div>
        <div>Model</div>
        <div>Rear Camera</div>
        <div>Front Camera</div>
        <div>Screen</div>
        <div>Storage</div>
        <div>OS</div>
        <div>Cost</div>
      </div>
      <div className="product-table">
        {products.map(
          ({
            id,
            brand,
            image,
            model,
            rear_camera,
            front_camera,
            screen,
            storage,
            os,
            cost
          }) => (
            <div key={id} className="product-features">
              <div>
                <img src={getImage(image)} alt="" />
              </div>
              <div>{brand}</div>
              <div>{model}</div>
              <div>{rear_camera}</div>
              <div>{front_camera}</div>
              <div>{screen}</div>
              <div>{storage}</div>
              <div>{os}</div>
              <div>${cost}</div>
              <div>
                <button onClick={() => dispatch(removeFromCompare(id))}>
                  REMOVE
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  ) : (
    <h1 className="no-items">Nothing to compare</h1>
  );
});

export default Compare;
