import React, { Component } from 'react';
import { ConnectedEditableItemList } from './EditableItemList';
import { ConnectedToggleableItemForm } from './ToggleableItemForm';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

export class ClassDashboard extends Component {

  handleCreateFormSubmit = (item) => {
    this.createItem(item);  
  };

  handleEditFormSubmit = (attrs) => {
    this.updateItem(attrs);
  };

  handleTrashClick = (itemId) => {
    this.deleteItem(itemId);
  };

  render() {
    return (
      <div className='ui six column centered grid'>
        <div className='column six wide'>
          <ConnectedEditableItemList
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />
          <ConnectedToggleableItemForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}