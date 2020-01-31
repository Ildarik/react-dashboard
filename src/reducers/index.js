export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.product] };
    case "SET_ACTIVE_CATEGORY":
      return { ...state, activeCategory: action.filter };
    case "ADD_CATEGORY":
      return { ...state, categories: [...state.categories, action.category] };
    default:
      return state;
  }
};
