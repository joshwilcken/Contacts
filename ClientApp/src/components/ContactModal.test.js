import { shallow } from "enzyme";
import "jest"
import React from "react";

import { ContactModal } from "./ContactModal";

describe("Contact Test", () => {
    let wrapper;

    describe("ContactModal Edit", () => {
        beforeEach(() => {
            wrapper = shallow(
                <ContactModal
                    edit={true}
                    showModal={true}
                    toggleShowModal={jest.fn()}
                    contact={{"id":1,"firstName":"Steve","lastName":"Rogers","street":"123 Brooklyn St.","city":"Brooklyn","state":"NY","email":"steveR@Avengers.com","zip":11234,"phoneNumber":"1115551234"}}
                    onSubmit={jest.fn()}/>
            );
        });

        it("should render the component", () => {
            expect(wrapper.find("Modal")).toHaveLength(1);
            expect(wrapper.find("#firstName").props().value).toBe("Steve")
        });

        it("should update the input onChange", () => {
            const event = {target: {value: "Steven"}};
            wrapper.find("#firstName").simulate("change", event);
            expect(wrapper.find("#firstName").props().value).toBe("Steven");
        });

    });

    describe("ContactModal Not Edit", () => {
        beforeEach(() => {
            wrapper = shallow(
                <ContactModal
                    edit={false}
                    showModal={true}
                    toggleShowModal={jest.fn()}
                    contact={{"id":1,"firstName":"Steve","lastName":"Rogers","street":"123 Brooklyn St.","city":"Brooklyn","state":"NY","email":"steveR@Avengers.com","zip":11234,"phoneNumber":"1115551234"}}
                    onSubmit={jest.fn()}/>
            );
        });

        it("should render the component", () => {
            expect(wrapper.find("Modal")).toHaveLength(1);
            expect(wrapper.find("#firstName").props().value).toBe("")
        });
    });
});
