import React, { Component } from 'react';
import { ItemList } from '../components/ItemList';
import { fetchItems } from '../actions/items';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ItemsListContainer extends Component {
	
	componentDidMount() {
    this.props.fetchItems();
  };

  render() {
		return (
			<ItemList
				items={this.props.items}
				editedItem={this.props.editedItem}
			/>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  	{
  		fetchItems,
  	},
  	dispatch);
};

const mapStateToProps = (state) => {
	return {
  	items: state.items,
  	editedItem: state.editedItem
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListContainer);