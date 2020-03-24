import { shallow } from "enzyme";
import "jest"
import React from "react";

import { Contacts } from "./Contacts";

describe("Contacts Tests", () => {
    let wrapper;

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve([{ "id": 1, "firstName": "Steve", "lastName": "Rogers", "street": "123 Brooklyn St.", "city": "Brooklyn", "state": "NY", "email": "steveR@Avengers.com", "zip": 11234, "phoneNumber": "1115551234" }])
        })
        wrapper = shallow(
            <Contacts
                showAddContactModal={false}
                togglehowAddContactModal={jest.fn()} />
        );
    });

    it("should render the component", () => {
        console.log(wrapper.debug())
        expect(wrapper.find(".contacts-container")).toHaveLength(1);
    })
});
