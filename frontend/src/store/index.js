import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import cartReducer from "./cart";
import ordersReducer from "./orders";
import productsReducer from "./products";
import reviewsReducer from "./reviews";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  cart: cartReducer,
  orders: ordersReducer,
  products: productsReducer,
  reviews: reviewsReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
