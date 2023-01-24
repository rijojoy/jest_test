import React from "react";
import { mount } from "@shopify/react-testing";
import "@shopify/react-testing/matchers";
// import ClickCounter from "./ClickCounter";

function Container() {
  return <Parent child={<button id="123" />} />;
}

function Parent({ child }) {
  return <div>{child}</div>;
}

describe("<ClickCounter />", () => {
  it("allows us to set props", () => {
    const wrapper = mount(<Container defaultCount={0} />);

    expect(wrapper).toContainReactComponent(Parent, { child: <button /> });
  });
});
