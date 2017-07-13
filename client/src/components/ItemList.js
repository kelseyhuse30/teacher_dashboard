import React, { Component } from 'react';
import { Item } from './Item';
import ItemForm from './ItemForm';

export class ItemList extends Component {
	render() {
		const items = this.props.items.map((item) => {
			if (this.props.editedItem === item.id) {
				return <ItemForm item={item} key={item.id}/>
			} else {
				return <Item item={item} key={item.id} />
			}
		})

		return (
			<div id="items">
				{items}
			</div>
		);
	}
}