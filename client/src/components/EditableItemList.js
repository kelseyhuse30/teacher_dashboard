import React, { Component } from 'react';
import { EditableItem } from './EditableItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { fetchItems } from '../actions/items.js';

class EditableItemList extends Component {

	componentDidMount() {
    this.props.fetchItems();
  };

	render() {
		const items = this.props.items.map((item) => (
			<EditableItem
				key={item.id}
				id={item.id}
				description={item.description}
				item_type={item.item_type}
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

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  	fetchItems,
  }, dispatch);
};

export const ConnectedEditableItemList = connect(mapStateToProps, mapDispatchToProps)(EditableItemList);