import React, { Component } from 'react';

import { Menu } from "./Menu";
import { Contacts } from "./Contacts"
import { EditContact } from "./EditContact";

export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showEditContact: false,
      showDeleteContact: false
    }
  }

  render () {
    return (
      <div className="main">
            <Menu addContact={this.toggleShowEditContact}/>
            <Contacts/>
            <EditContact showEditContact={this.state.showEditContact}
              toggleShowEditContact={this.toggleShowEditContact}/>
      </div>
    );
  }

  toggleShowEditContact = () => {
    this.setState((prevState) => {
      return {showEditContact: !prevState.showEditContact}
    })
  }

  toggleShowDeleteContact = () => {
    this.setState((prevState) => {
      return {showDeleteContact: !prevState.showDeleteContact}
    })
  }
}
