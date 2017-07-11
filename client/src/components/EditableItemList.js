import React, { Component } from 'react';
import { EditableItem } from './EditableItem';

export class EditableItemList extends Component {
	render() {
		const items = this.props.items.map((item) => (
			<EditableItem
				key={item.id}
				id={item.id}
				description={item.description}
				type={item.type}
				onFormSubmit={this.props.onFormSubmit}
				onTrashClick={this.props.onTrashClick}
			/>
		))

		return (
			<div id="items">
				{items}
			</div>
		);
	}
}