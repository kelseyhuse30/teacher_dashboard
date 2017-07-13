import React, { Component } from 'react';
import { ConnectedItemForm } from './ItemForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openForm } from '../actions/itemForm';

export class ToggleableItemForm extends Component {

  handleFormOpen = (event) => {
    this.props.openForm();
  }

  render() {
    if (this.props.isOpen) {
      return (
        <ConnectedItemForm/>
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen()}
          >
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openForm,
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.isOpen
  }
}

export const ConnectedToggleableItemForm = connect(mapStateToProps, mapDispatchToProps)(ToggleableItemForm);