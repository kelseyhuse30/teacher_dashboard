import React, { Component } from 'react';

export class ItemForm extends Component {
	state = {
		description: this.props.description || '',
		type: this.props.type || '',
	};

	handleFieldChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	};

	handleSubmit = () => {
		this.props.onFormSubmit({
			id: this.props.id,
			description: this.state.description,
			type: this.state.type,
		});
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
              	value={this.props.type}
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