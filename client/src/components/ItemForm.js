import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, updateItem } from '../actions/items';
import { setEditId } from '../actions/setEditId';
import { closeForm } from '../actions/itemForm';


class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.item.description || '',
      item_type: this.props.item.item_type || ''
    }
  }

  componentWillMount = () => {
    if (this.state.editedItem) {
      console.log("get item data");
    }
  }

  handleSubmit = () => {
    if (this.props.item.id) {
      this.props.updateItem(this.props.item.id, this.state)
      this.props.setEditId(null)
    } else {
      this.props.addItem(this.state)
      this.handleClose()
    }
  }

  handleClose = () => {
    this.props.closeForm()
    this.props.setEditId(null)
  }

	render() {
		return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
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
              	onClick={(e) => this.handleSubmit()}
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
          </div>
        </div>
      </div>
    );
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem,
    closeForm,
    updateItem,
    setEditId,
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    editedItem: state.editedItem
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);