import { shallow } from "enzyme";
import "jest"
import React from "react";

import { Menu } from "./Menu"

describe("Menu Tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Menu/>
        );
    });

    it("should render the Menu compoent", () => {
        expect(wrapper.find("Header")).toHaveLength(1)
    })
});
