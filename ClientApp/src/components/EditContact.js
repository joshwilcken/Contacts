import React, { Component } from "react";
import { Icon, Input, Modal } from "semantic-ui-react";

export class EditContact extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Modal open={this.props.showEditContact}>
                <Modal.Header>
                    Add a Contact
                    <Icon name="close" color="red" onClick={this.props.toggleShowEditContact}/>
                </Modal.Header>
                <Modal.Content >
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <div>Address</div>
                    <Input placeholder="Street"/>
                    <Input placeholder="City"/>
                    <Input placeholder="State"/>
                    <Input placeholder="Zip"/>
                    <Input placeholder="Phone Number"/>
                    <Input iconPosition="left" placeholder="Email">
                        <Icon name="at"/>
                        <input />
                    </Input>

                </Modal.Content>
            </Modal>
        );
    }
}
