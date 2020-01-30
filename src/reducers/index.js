export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.product] };

    case "SET_ACTIVE_CATEGORY":
      return { ...state, activeCategory: action.filter };
    // case "EDIT_PRODUCT":
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );
    // case "REMOVE_PRODUCT":
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );
    // case "ADD_CATEGORY":
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );
    // case "REMOVE_CATEGORY":
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );
    default:
      return state;
  }
};
