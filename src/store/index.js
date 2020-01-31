import { createStore } from "redux";
import rootReducer from "../reducers";

const productsMock = [
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
  },
  {
    id: "5",
    name: "Product 5",
    category: null,
    price: "200",
    sell: "500"
  },
  {
    id: "6",
    name: "Product 6",
    category: undefined,
    price: "20005",
    sell: "25099"
  }
];

const categoriesMock = productsMock.map(product => product.category);

const store = createStore(rootReducer, {
  products: productsMock,
  categories: categoriesMock,
  activeCategory: ""
});

export default store;
