import React, { Component } from 'react';
import { EditableItemList } from './EditableItemList';
import { ToggleableItemForm } from './ToggleableItemForm';

export class TeacherDashboard extends React.Component {
  state = {
    items: [
      {
        description: "Complete Page 7",
        type: "journal",
      },
      {
        description: "Scratch Surprise",
        type: "project",
      },
      {
        description: "Scratch Card Packs",
        type: "bonus",
      },
    ]
  };

  handleCreateFormSubmit = (item) => {
    this.createItem(item);  
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (itemId) => {
    this.deleteItem(itemId);
  };

  createItem = (item) => {
    const newItem = {
      description: item.description,
      type: item.type,
    }
    this.setState({
      items: this.state.items.concat(newItem),
    })
  };

  updateItem = (attrs) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === attrs.id) {
          return Object.assign({}, item, {
            description: attrs.description,
            type: attrs.type,
          });
        } else {
          return item;
        }
      }),
    });
  };

  deleteItem = (itemId) => {
    this.setState({
      items: this.state.items.filter(i => i.id !== itemId),
    });
  };

  render() {
    return (
      <div className='ui six column centered grid'>
        <div className='column six wide'>
          <EditableItemList
            items={this.state.items}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />
          <ToggleableItemForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}