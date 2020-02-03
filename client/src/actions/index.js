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

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_HOST}/products`);

      const res = await handleErrors(response);
      const json = await res.json();
      dispatch(setProducts(json.products));
      return json.products;
    } catch (error) {
      return console.error(error);
    }
  };
};

export const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_HOST}/categories`);

      const res = await handleErrors(response);
      const json = await res.json();
      dispatch(setCategories(json.categories));
      return json.categories;
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