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

export const toggleAuthentication = () => ({
  type: "TOGGLE_AUTHENTICATION"
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
      await fetch(productsEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
      dispatch(getProducts());
    } catch (error) {
      return console.error(error);
    }
  };
};

export const editProduct = product => {
  return async dispatch => {
    try {
      await fetch(productsEndpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
      dispatch(getProducts());
    } catch (error) {
      return console.error(error);
    }
  };
};

export const removeProduct = productId => {
  return async dispatch => {
    try {
      await fetch(productsEndpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
      });
      dispatch(getProducts());
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
      await fetch(categoriesEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category })
      });
      dispatch(getCategories());
    } catch (error) {
      return console.error(error);
    }
  };
};

export const removeCategory = category => {
  return async dispatch => {
    try {
      await fetch(categoriesEndpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category })
      });
      dispatch(getCategories());
    } catch (error) {
      return console.error(error);
    }
  };
};

export const login = ({ username, password }) => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_HOST}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        return dispatch(toggleAuthentication());
      }
    } catch (error) {
      return console.error(error);
    }
  };
};

export const register = ({ username, password }, history) => {
  return async dispatch => {
    try {
      const response = await fetch(`${API_HOST}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        dispatch(toggleAuthentication());
        history.push("/admin");
      }
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
