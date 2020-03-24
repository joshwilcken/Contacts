import React, { Component } from "react";
import { Button, Icon, Input, Modal } from "semantic-ui-react";

import { utils } from "../utils/utils"

export class ContactModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                firstName: "",
                lastName: "",
                street: "",
                city: "",
                state: "",
                zip: "",
                phoneNumber: "",
                email: ""
            }
        }
    }

    componentDidMount() {
        if (this.props.edit && this.props.showModal) {
            this.updateInputsForEdit();
        } else {
            this.setState({
                form: {
                    firstName: "",
                    lastName: "",
                    street: "",
                    city: "",
                    state: "",
                    zip: "",
                    phoneNumber: "",
                    email: ""
                }
            })
        }
    }

    updateInputsForEdit = () => {
        const { id, firstName, lastName, street, city, state, zip, phoneNumber, email } = this.props.contact
        this.setState({
            form: {
                id,
                firstName,
                lastName,
                street,
                city,
                state,
                zip,
                phoneNumber,
                email
            }
        })
    }

    onUpdateInput = (input, value) => {
        this.setState((prevState) => {
            return {
                form: {
                    ...prevState.form,
                    [input]: value
                }
            }
        });
    }

    render() {
        const header = this.props.edit ? "Edit Contact" : "Add New Contact";
        return (
            <Modal open={this.props.showModal}>
                <Modal.Header>
                    {header}
                </Modal.Header>
                <Modal.Content className="content-section">
                    <Input id="firstName" label="First Name" placeholder="First Name" value={this.state.form.firstName} onChange={(event) => this.onUpdateInput("firstName", event.target.value)} />
                    <Input placeholder="Last Name" label="Last Name" value={this.state.form.lastName} onChange={(event) => this.onUpdateInput("lastName", event.target.value)} />
                    <Input placeholder="Phone Number" label="Phone Number" value={utils.formatNumber(this.state.form.phoneNumber)} onChange={(event) => this.onUpdateInput("phoneNumber", event.target.value)} />
                    <Input placeholder="Email" label="Email" className="last" value={this.state.form.email} onChange={(event) => this.onUpdateInput("email", event.target.value)}/>
                </Modal.Content>
                <Modal.Content className="content-section">
                    <Input placeholder="Street" label="Street" value={this.state.form.street} onChange={(event) => this.onUpdateInput("street", event.target.value)} />
                    <Input placeholder="City" label="City" value={this.state.form.city} onChange={(event) => this.onUpdateInput("city", event.target.value)} />
                    <Input placeholder="State" label="State" value={this.state.form.state} onChange={(event) => this.onUpdateInput("state", event.target.value)} />
                    <Input placeholder="Zip" label="Zip" className="last" value={this.state.form.zip} onChange={(event) => this.onUpdateInput("zip", event.target.value)} />
                </Modal.Content>
                <Modal.Actions>
                    <Button inverted color='red' onClick={this.props.toggleShowModal}>
                        <Icon name='remove' /> Close
                    </Button>
                    <Button inverted color="green" onClick={() => this.props.onSubmit(this.state.form)}>
                        <Icon name="checkmark" /> Submit
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}
