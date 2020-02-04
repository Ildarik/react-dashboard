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
      }).then(() => dispatch(getProducts()));
    } catch (error) {
      return console.error(error);
    }
  };
};

export const editProduct = product => {
  return async dispatch => {
    try {
      return await fetch(`${API_HOST}/products`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      }).then(() => dispatch(getProducts()));
    } catch (error) {
      return console.error(error);
    }
  };
};

export const removeProduct = productId => {
  return async dispatch => {
    try {
      return await fetch(`${API_HOST}/products`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
      }).then(() => dispatch(getProducts()));
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

export const addCategory = category => {
  return async dispatch => {
    try {
      return await fetch(`${API_HOST}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category })
      }).then(() => dispatch(getCategories()));
    } catch (error) {
      return console.error(error);
    }
  };
};

export const removeCategory = category => {
  return async dispatch => {
    try {
      return await fetch(`${API_HOST}/categories`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category })
      }).then(() => dispatch(getCategories()));
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
