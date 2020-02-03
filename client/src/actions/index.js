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

export const setActiveNoCategory = () => ({
  type: "SET_ACTIVE_NO_CATEGORY"
});

export const setProducts = products => ({
  type: "SET_PRODUCTS",
  products
});

export const setCategories = categories => ({
  type: "SET_CATEGORIES",
  categories
});

const API_HOST = "http://localhost:5000/api";

export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_HOST}/products`);

      const res = handleErrors(response);
      const json = await res.json();
      dispatch(setProducts(json.products));
      return;
    } catch (error) {
      return console.error(error);
    }
  };
};

export const addProduct = product => {
  return async dispatch => {
    try {
      return await fetch(`${API_HOST}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      }).then(dispatch(getProducts()));
    } catch (error) {
      return console.error(error);
    }
  };
};

export const getCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_HOST}/categories`);

      const res = handleErrors(response);
      const json = await res.json();
      dispatch(setCategories(json.categories));
      return;
    } catch (error) {
      return console.error(error);
    }
  };
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
