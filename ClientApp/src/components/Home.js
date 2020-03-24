import React, { Component } from 'react';

import { Menu } from "./Menu";
import { Contacts } from "./Contacts"

export class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAddContactModal: false,
   }
  }

  render() {
    return (
      <div className="main">
        <Menu addContact={this.toggleShowModal} />
        <Contacts showAddContactModal={this.state.showAddContactModal}
          toggleShowAddContactModal={this.toggleShowModal}/>
      </div>
    );
  }

  toggleShowModal = () => {
    this.setState((prevState) => {
      return { showAddContactModal: !prevState.showAddContactModal }
    })
  }

}
