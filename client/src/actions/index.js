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

export const setAuthenticated = () => ({
  type: "SET_AUTHENTICATED"
});

const API_HOST = "http://localhost:5000/api";

const productsEndpoint = `${API_HOST}/products`;
const categoriesEndpoint = `${API_HOST}/categories`;

export const getProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch(productsEndpoint);

      const res = handleErrors(response);
      const json = await res.json();
      dispatch(setProducts(json));
      return;
    } catch (error) {
      return console.error(error);
    }
  };
};

export const addProduct = product => {
  return async dispatch => {
    try {
      return await fetch(productsEndpoint, {
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
      return await fetch(productsEndpoint, {
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
      return await fetch(productsEndpoint, {
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
      const response = await fetch(categoriesEndpoint);

      const res = handleErrors(response);
      const json = await res.json();
      dispatch(setCategories(json));
      return;
    } catch (error) {
      return console.error(error);
    }
  };
};

export const addCategory = category => {
  return async dispatch => {
    try {
      return await fetch(categoriesEndpoint, {
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
      return await fetch(categoriesEndpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category })
      }).then(() => dispatch(getCategories()));
    } catch (error) {
      return console.error(error);
    }
  };
};

/* auth */

export const login = ({ username, password }) => {
  return async dispatch => {
    try {
      return await fetch(`${API_HOST}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      }).then(dispatch(setAuthenticated()));
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
