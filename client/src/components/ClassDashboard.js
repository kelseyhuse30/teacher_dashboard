import React, { Component } from 'react';
import ItemsListContainer from '../containers/ItemsListContainer';
import TimerContainer from '../containers/TimerContainer';
import ToggleableItemForm from './ToggleableItemForm';

export class ClassDashboard extends Component {
  render() {
    return (
      <div className='ui equal width two column centered grid'>
        <div className='four wide column'>
          <TimerContainer/>
        </div>
        <div className='four wide column'>
          <ItemsListContainer/>
          <ToggleableItemForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}