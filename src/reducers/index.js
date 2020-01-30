export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];
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
