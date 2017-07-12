import React, { Component } from 'react';
import { completeItem, destroyItem } from '../actions/items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Item extends Component {
	handleTrashClick = () => {
		this.props.destroyItem(this.props.id);
	};

	handleDoneClick = () => {
		this.props.completeItem(this.props.id);
	};

	render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.item_type}
          </div>
          <div className='meta'>
            {this.props.description}
          </div>
          <div className='extra content'>
            <span
            	className='right floated edit icon'
            	onClick={this.props.handleEditClick}
            >
              <i className='edit icon' />
            </span>
            <span
            	className='right floated trash icon'
            	onClick={this.handleTrashClick}
            >
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div
        	className='ui bottom attached green basic button'
        	onClick={this.handleDoneClick}
        >
         	{this.props.done ? <i className='checkmark icon' /> : "Done" }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    completeItem,
    destroyItem,
  }, dispatch);
};

export const ConnectedItem = connect(null, mapDispatchToProps)(Item);
