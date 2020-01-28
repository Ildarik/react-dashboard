import { createStore } from "redux";
import rootReducer from "../reducers";

const mock = [
  {
    id: "1",
    name: "Product 1",
    category: "Category 1",
    price: "2200",
    sell: "2500"
  },
  {
    id: "2",
    name: "Product 2",
    category: "Category 2",
    price: "2200",
    sell: "2500"
  },
  {
    id: "3",
    name: "Product 3",
    category: "Category 3",
    price: "2200",
    sell: "2500"
  },
  {
    id: "4",
    name: "Product 4",
    category: "No category",
    price: "2200",
    sell: "2500"
  }
];

const store = createStore(rootReducer, mock);

export default store;
