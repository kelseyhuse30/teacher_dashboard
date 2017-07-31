import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, updateItem } from '../actions/items';
import { closeNewItemForm } from '../actions/newItemForm';

class ItemForm extends Component {
  constructor(props) {
    super(props);

    if (this.props.item !== undefined) {
      this.state = {
        description: props.item.description,
        item_type: props.item.item_type
      }
    } else {
      this.state = {
        description: '',
        item_type: ''
      }
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.props.item !== undefined) {
      this.props.updateItem(this.props.item.id, this.state)
    } else {
      this.props.addItem(this.state)
      this.props.closeNewItemForm();
    }
  }

	render() {
		return (
      <div className='ui centered card'>
        <div className='content'>
          <form className='ui form' onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className='field'>
              <label>Description</label>
              <input
              	type='text'
              	value={this.state.description}
              	onChange={(e) => this.setState({description: e.target.value})}
              />
            </div>
            <div className='field'>
              <label>Type</label>
              <input
              	type='text'
              	value={this.state.item_type}
              	onChange={(e) => this.setState({item_type: e.target.value})}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
              	className='ui basic blue button'
              	type='submit'
              >
                Submit
              </button>
              <button
              	className='ui basic red button'
              	onClick={(e) => this.handleClose()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem,
    updateItem,
    closeNewItemForm
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ItemForm);