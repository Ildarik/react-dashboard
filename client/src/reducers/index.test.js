import reducer from "./index";

describe("root reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      products: [],
      categories: [],
      activeCategory: "",
      isUserAuthenticated: false
    });
  });
  it("should handle ADD_PRODUCT", () => {
    expect(
      reducer(
        { products: [] },
        {
          type: "ADD_PRODUCT",
          product: {
            name: "Trousers",
            price: 19,
            sell: 100
          }
        }
      )
    ).toEqual({
      products: [
        {
          name: "Trousers",
          price: 19,
          sell: 100
        }
      ]
    });
  });
});
