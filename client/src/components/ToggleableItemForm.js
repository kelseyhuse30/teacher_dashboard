import React, { Component } from 'react';
import ItemForm from './ItemForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/items';
import { openNewItemForm, closeNewItemForm } from '../actions/newItemForm';

class ToggleableItemForm extends Component {

  handleFormOpen = () => {
    this.props.openNewItemForm();
  };

  handleSubmit = (values) => {
    console.log(values)
    //this.props.addItem(values);
    console.log('closing form');
    this.props.closeNewItemForm();
  };

  handleCancel = () => {
    this.props.closeNewItemForm();
  };

  render() {
    if (this.props.isOpen) {
      return (
        <ItemForm
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
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
    openNewItemForm,
    closeNewItemForm,
    addItem
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.newItemForm.isOpen
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleableItemForm);