import React, { Component } from 'react';
import { destroyItem, openEditForm } from '../actions/items';
import { setEditId } from '../actions/setEditId';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

class ItemActions extends Component {

	handleTrashClick = () => {
		this.props.destroyItem(this.props.itemId)
	};

	handleEditClick = () => {
		this.props.setEditId(this.props.itemId)
		this.props.openEditForm(this.props.itemId)
	};

	render() {
		return (
	    <div className='extra content'>
			  <span
			  	className='right floated edit icon'
			  	onClick={(e) => this.handleEditClick()}
			  >
			    <i className='edit icon' />
			  </span>
			  <span
			  	className='right floated trash icon'
			  	onClick={(e) => this.handleTrashClick()}
			  >
			    <i className='trash icon' />
			  </span>
			</div>
	)
}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  	{
  		destroyItem,
  		setEditId,
  		openEditForm,
  	},
  	dispatch);
};

export default connect(null, mapDispatchToProps)(ItemActions)


