import React, { Component } from 'react';
import { ConnectedItemForm } from './ItemForm';

export class ToggleableItemForm extends Component {
  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (item) => {
    this.props.onFormSubmit(item);
    this.setState({ isOpen: false });
  }

  render() {
    if (this.state.isOpen) {
      return (
        <ConnectedItemForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}