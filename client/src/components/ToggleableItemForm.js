import React, { Component } from 'react';
import ItemForm from './ItemForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openForm } from '../actions/itemForm';

export class ToggleableItemForm extends Component {

  handleFormOpen = () => {
    this.props.openForm();
  }

  render() {
    if (this.props.isOpen) {
      return (
        <ItemForm/>
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={(e) => this.handleFormOpen()}
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
    isOpen: state.itemForm.isOpen
  }
}

export const ConnectedToggleableItemForm = connect(mapStateToProps, mapDispatchToProps)(ToggleableItemForm);