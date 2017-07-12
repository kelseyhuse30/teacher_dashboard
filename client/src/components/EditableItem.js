import React, { Component } from 'react';
import { ConnectedItemForm } from './ItemForm';
import { ConnectedItem } from './Item';

export class EditableItem extends Component {
	state = {
		editFormOpen: false,
	};

	handleEditClick = () => {
		this.openForm();
	};

	handleFormClose = () => {
		this.closeForm();
	};

	handleSubmit = (item) => {
		this.props.onFormSubmit(item);
		this.closeForm();
	};

	closeForm = () => {
		this.setState({editFormOpen: false});
	};

	openForm = () => {
		this.setState({editFormOpen: true});
	};

	render() {
		if (this.state.editFormOpen) {
			return (
				<ConnectedItemForm
					id={this.props.id}
					description={this.props.description}
					item_type={this.props.item_type}
					onFormSubmit={this.handleSubmit}
					onFormClose={this.handleFormClose}
				/>
			);
		} else {
			return (
				<ConnectedItem
					id={this.props.id}
					description={this.props.description}
					item_type={this.props.item_type}
					done={this.props.done}
					onEditClick={this.handleEditClick}
				/>
			);
		}
	}
}