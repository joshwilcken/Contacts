import React from "react";
import { Button, Card } from "semantic-ui-react";

import { utils } from "../utils/utils"

export const Contact = (props) => {
    const { id, firstName, lastName, street, city, state, zip, phoneNumber, email } = props.contact
    return (
        <Card className="contact">
            <Card.Content>
                <Card.Header>{firstName + " " + lastName}</Card.Header>
                <Card.Meta>{utils.formatNumber(phoneNumber)}</Card.Meta>
                <Card.Meta>{email}</Card.Meta>
                <Card.Meta>{street}</Card.Meta>
                <Card.Meta>{`${city} ${state}, ${zip}`}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button id="edit" basic color="blue" onClick={() => props.onEditContact(props.contact)}>Edit</Button>
                    <Button id="delete" basic color="red" onClick={() => props.onDelete(id)}>Delete</Button>
                </div>
            </Card.Content>
        </Card>
    )
}
