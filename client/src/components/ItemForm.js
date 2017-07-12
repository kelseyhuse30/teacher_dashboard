import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/items';


class ItemForm extends Component {
	state = {
		description: this.props.description || '',
		type: this.props.item_type || '',
    id: this.props.id || '',
	};

	handleFieldChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	};

	handleSubmit = () => {
	 if (this.props.id) {
      this.props.updateItem(this.state);
    } else {
      this.props.addItem(this.state);
		};
	};

	render() {
		const submitText = this.props.id ? 'Update' : 'Create';
		return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Description</label>
              <input
              	type='text'
              	value={this.props.description}
              	onChange={this.handleFieldChange}
              />
            </div>
            <div className='field'>
              <label>Type</label>
              <input
              	type='text'
              	value={this.props.item_type}
              	onChange={this.handleFieldChange}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
              	className='ui basic blue button'
              	onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button
              	className='ui basic red button'
              	onClick={this.props.onFormClose}
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
  }, dispatch);
};

export const ConnectedItemForm = connect(null, mapDispatchToProps)(ItemForm);