import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartList from "./components/CartList";
import ProductList from "./components/Product/ProductList";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/cartList">
          <CartList />
        </Route>
      </Switch>
    </Router>
  );
}
