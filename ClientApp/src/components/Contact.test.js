import { shallow } from "enzyme";
import "jest"
import React from "react";

import { Contact } from "./Contact";

describe("Contact Test", () => {
    let spy;
    let wrapper;
    const contact={"id":1,"firstName":"Steve","lastName":"Rogers","street":"123 Brooklyn St.","city":"Brooklyn","state":"NY","email":"steveR@Avengers.com","zip":11234,"phoneNumber":"1115551234"}
    beforeEach(() => {
        wrapper = shallow(
            <Contact
                contact={contact}
                onEditContact={jest.fn()}
                onDelete={jest.fn()}
                formatNumber={jest.fn()}/>
        )
    });

    it("should render the component", () => {
        expect(wrapper.find(".contact")).toHaveLength(1);
    });
})
