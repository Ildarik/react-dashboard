import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

describe("<Login />", () => {
  it("should render self", () => {
    const store = mockStore({});

    const wrapper = () =>
      mount(
        <Provider store={store}>
          <Login />
        </Provider>
      );

    const enzymeWrapper = wrapper();

    expect(
      enzymeWrapper
        .find("div")
        .at(0)
        .hasClass("container")
    ).toBe(true);
    expect(
      enzymeWrapper
        .find("input")
        .at(0)
        .props().placeholder
    ).toBe("usern@me");
    expect(
      enzymeWrapper
        .find("input")
        .at(0)
        .props().type
    ).toBe("email");
  });
});
