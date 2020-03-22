import React from "react";
import { Header, Icon } from "semantic-ui-react";

export const Menu = (props) => (
    <Header className="menu">
        <Icon name="address book"/>
        <Header.Content>Contacts</Header.Content>
        <Icon name="plus" color="green" onClick={props.addContact}/>
    </Header>
)
