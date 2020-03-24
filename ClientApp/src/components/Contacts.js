import React, { Component } from "react";

import { Contact } from "./Contact";
import { ContactModal } from "./ContactModal";
import { WarningModal } from "./WarningModal";

export class Contacts extends Component {

    constructor() {
        super();

        this.state = {
            contacts: [],
            showEditContactModal: false,
            showAddContactModal: false,
            contactForModal: null,
            showWarning: false
        }
    }

    componentDidMount() {
        this.getContacts();
    }

    getContacts = () => {
        fetch("/api/Contacts").then((success) => {
            success.json().then((data) => {
                this.setState({
                    contacts: data
                });
            });
        });
    }

    onDelete = (id) => {
        fetch(`/api/Contacts/${id}`, { method: "DELETE" })
            .then((success) => {
                success.json().then(() => {
                });
            }).then(() => {
                this.getContacts();
            });
    }


    onAddContact = (contact) => {
        const url = "/api/Contacts";
        const headers = new Headers();
        headers.append("Content-Type", "application/JSON");
        const requestOptions = {
            method: "POST",
            headers,
            body: JSON.stringify(contact)
        }
        fetch(url, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    this.toggleShowWarning();
                }
                else {
                    response.json().then(() => {
                        this.props.toggleShowAddContactModal();
                    });
                }
            })
            .then(() => {
                this.getContacts();
            }).catch((error) => {
                console.log(error)
            })
    }

    onEditContact = (contact) => {
        const url = "/api/Contacts";
        const headers = new Headers();
        headers.append("Content-Type", "application/JSON");
        const requestOptions = {
            method: "PUT",
            headers,
            body: JSON.stringify(contact)
        }
        fetch(url, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    this.toggleShowWarning();
                }
                else {
                    response.json().then(() => {
                        this.toggleShowEditContact();
                    });
                }
            }).then(() => {
                this.getContacts();
            }).catch((error) => {
                console.log(error)
            })
    }
    setUpContactModal = (contact) => {
        this.setState({
            contactForModal: contact,
        });
        this.toggleShowEditContact();
    }

    toggleShowEditContact = () => {
        this.setState((prevState) => {
            return { showEditContactModal: !prevState.showEditContactModal }
        });
    }

    toggleShowWarning = () => {
        this.setState((prevState) => {
            return { showWarning: !prevState.showWarning }
        });
    }

    renderContacts = () => {
        if (this.state.contacts.length === 0) {
            return;
        }
        return this.state.contacts.map((contact, index) => {
            return (
                <Contact
                    key={index}
                    onDelete={this.onDelete}
                    onEditContact={this.setUpContactModal}
                    contact={contact} />
            );
        });
    }

    render() {
        return (
            <div className="contacts-container">
                <div className="contacts">
                    {this.renderContacts()}
                </div>
                {this.state.showEditContactModal &&
                    <ContactModal edit showModal={this.state.showEditContactModal}
                        toggleShowModal={this.toggleShowEditContact}
                        contact={this.state.contactForModal}
                        onSubmit={this.onEditContact} />
                }
                {this.props.showAddContactModal &&
                    <ContactModal showModal={this.props.showAddContactModal}
                        toggleShowModal={this.props.toggleShowAddContactModal}
                        onSubmit={this.onAddContact} />
                }
                {this.state.showWarning &&
                    <WarningModal showWarning={this.state.showWarning} onOk={this.toggleShowWarning} />
                }
            </div>
        );
    }
}
