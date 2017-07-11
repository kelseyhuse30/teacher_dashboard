import React, { Component } from 'react';
import { ItemForm } from './ItemForm';
import { Item } from './Item';

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
				<ItemForm
					id={this.props.id}
					description={this.props.description}
					type={this.props.type}
					onFormSubmit={this.handleSubmit}
					onFormClose={this.handleFormClose}
				/>
			);
		} else {
			return (
				<Item
					id={this.props.id}
					description={this.props.description}
					type={this.props.type}
					onEditClick={this.handleEditClick}
					onTrashClick={this.props.onTrashClick}
				/>
			);
		}
	}
}