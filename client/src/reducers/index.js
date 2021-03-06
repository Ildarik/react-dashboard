import { NO_CATEGORY } from "../constants";

const initialState = {
  products: [],
  categories: [],
  activeCategory: "",
  isUserAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.product] };
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.map(product =>
            product.id === action.product.id ? action.product : product
          )
        ]
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      };
    case "ADD_CATEGORY":
      return { ...state, categories: [...state.categories, action.category] };
    case "REMOVE_CATEGORY":
      return {
        ...state,
        products: state.products.map(product =>
          product.category === action.category
            ? { ...product, category: NO_CATEGORY }
            : product
        ),
        categories: state.categories.filter(
          category => category !== action.category
        ),
        activeCategory:
          state.activeCategory === action.category ? "" : state.activeCategory
      };
    case "SET_ACTIVE_CATEGORY":
      return { ...state, activeCategory: action.filter };
    case "SET_ACTIVE_NO_CATEGORY":
      return { ...state, activeCategory: NO_CATEGORY };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products
      };

    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.categories
      };

    case "TOGGLE_AUTHENTICATION":
      return {
        ...state,
        isUserAuthenticated: !state.isUserAuthenticated
      };
    default:
      return state;
  }
};
