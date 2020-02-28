import * as actions from "./index";

describe("actions", () => {
  it("should set an active category to filter", () => {
    const filter = "Man";
    const expectedAction = {
      type: "SET_ACTIVE_CATEGORY",
      filter
    };
    expect(actions.setActiveCategory(filter)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should set products", () => {
    const products = [
      {
        _id: "5e44e1857f2b25114c2216f6",
        name: "Trousers",
        price: 19,
        sell: 100,
        __v: 0
      },
      {
        _id: "5e44e1917f2b25114c2216f7",
        name: "Hat",
        category: "5e44e1757f2b25114c2216f4",
        price: 200,
        sell: 220,
        __v: 0
      }
    ];
    const expectedAction = {
      type: "SET_PRODUCTS",
      products
    };
    expect(actions.setProducts(products)).toEqual(expectedAction);
  });
});
