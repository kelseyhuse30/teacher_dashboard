import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item } from './Item';
import ItemForm from './ItemForm';
import { updateItem } from '../actions/items';
import { closeNewItemForm } from '../actions/newItemForm';

class ItemList extends Component {
	submit = (values) => {
		this.props.updateItem(values);
	}

	cancel = () => {
		this.props.closeNewItemForm();
	}

	render() {
		const items = this.props.items.map((item) => {
			if (item.form_open) {
				return (
					<ItemForm
						item={item}
						key={item.id}
						onSubmit={this.submit}
						handleCancel={this.cancel}/>
				);
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateItem,
    closeNewItemForm
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ItemList);