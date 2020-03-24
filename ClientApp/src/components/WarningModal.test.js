import { shallow } from "enzyme";
import "jest";
import React from "react";

import { WarningModal } from "./WarningModal";

describe("WarningModal Tests", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <WarningModal
                showWarning={true}
                onOk={jest.fn()}/>
        );
    });

    it("should render the WarningModal compoent", () => {
        expect(wrapper.find("Header")).toHaveLength(1);
    });
});
