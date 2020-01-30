export const addProduct = product => ({
  type: "ADD_PRODUCT",
  product
});

export const editProduct = product => ({
  type: "EDIT_PRODUCT",
  product
});

export const removeProduct = id => ({
  type: "REMOVE_PRODUCT",
  id
});

export const addCategory = category => ({
  type: "ADD_CATEGORY",
  category
});

export const removeCategory = category => ({
  type: "REMOVE_CATEGORY",
  category
});

export const setActiveCategory = filter => ({
  type: "SET_ACTIVE_CATEGORY",
  filter
});
