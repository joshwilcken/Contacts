import React, { Component } from "react";

import { Contact } from "./Contact"

export class Contacts extends Component {

    constructor() {
        super();

        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        fetch("/api/Contacts").then((success) => {
            success.json().then((data) => {
                this.setState({
                    contacts: data
                })
            })
        })
    }

    renderContacts = () => {
        if (this.state.contacts.length === 0) {
            return;
        }
        return this.state.contacts.map((contact, index) => {
            return (
                <Contact
                    key={index}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    phoneNumber={this.formatNumber(contact.phoneNumber)}
                    email={contact.email}
                    street={contact.street}
                    city={contact.city}
                    state={contact.state}
                    zip={contact.zip} />
            )
        })
    }

    formatNumber = (number) => {
        const str = number.toString()
        let cleaned = ('' + str).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
    }

    render() {
        return (
            <div>
                {this.renderContacts()}
            </div>
        );
    }
}

// const mockContacts = [
//     {name: "Steve Rogers", number: "(111) 555-1234", address: "123 Brooklyn St. Brooklyn, NY 11234"},
//     {name: "Tony Stark", number: "(111) 555-1235", address: "10880 Malibu Point Malibu, CA 90265"},
//     {name: "Thor", number: "N/A", address: "Asgard"},
//     {name: "Bruce Banner", number: "(111) 555-1236", address: "123 Dayton St. Dayton, OH 45377"},
//     {name: "Natasha Romanov", number: "(111) 555-1237", address: "123 Buffalo St. Buffalo, NY 14201"}
// ]
