import React from "react";
import { Button, Card } from "semantic-ui-react";

export const Contact = (props) => (
    <Card>
        <Card.Content>
            <Card.Header>{props.firstName + " " + props.lastName}</Card.Header>
            <Card.Meta>{props.phoneNumber}</Card.Meta>
            <Card.Meta>{props.email}</Card.Meta>
            <Card.Meta>{props.street}</Card.Meta>
            <Card.Meta>{`${props.city} ${props.state}, ${props.zip}`}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <div className="ui two buttons">
                <Button basic color="blue">Edit</Button>
                <Button basic color="red">Delete</Button>
            </div>
        </Card.Content>
    </Card>
)
