import React from "react";
import { Header, Icon } from "semantic-ui-react";

export const Menu = (props) => (
    <Header className="top-menu">
        <Icon name="address book"/>
        <Header.Content>Contacts</Header.Content>
        <Icon className="add" name="plus" color="green" onClick={props.addContact}/>
    </Header>
)
