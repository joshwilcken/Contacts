import { shallow } from "enzyme";
import "jest"
import React from "react";

import { Home } from "./Home"

describe("Menu Tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Home/>
        );
    });

    it("should render the Home compoent", () => {
        expect(wrapper.find(".main")).toHaveLength(1)
    });

    it("should toggle the showAddContactModal property on when called", () => {
        wrapper.instance().toggleShowModal();
        expect(wrapper.instance().state.showAddContactModal).toBe(true);
    });
});
