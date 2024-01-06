import React, { memo } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import Catalog from "./components/Catalog";
import Compare from "./components/Compare";
import Product from "./components/Product";

const App = memo(() => {
  const { products } = useSelector((state) => state.compare, shallowEqual);
  return (
    <div className="confronto-app">
      <h1>Confronto</h1>
      <div className="navigation">
        <Link to="/">Catalog</Link>
        <Link to="/compare" className={products.length > 0 ? "strong" : null}>
          Compare ({products.length})
        </Link>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/compare">
            <Compare />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </div>
    </div>
  );
});

export default App;
