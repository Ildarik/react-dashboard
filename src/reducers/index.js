export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.product] };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      };
    case "ADD_CATEGORY":
      return { ...state, categories: [...state.categories, action.category] };
    case "SET_ACTIVE_CATEGORY":
      return { ...state, activeCategory: action.filter };
    case "SET_ACTIVE_NO_CATEGORY":
      return { ...state, activeCategory: "No category" };
    default:
      return state;
  }
};
