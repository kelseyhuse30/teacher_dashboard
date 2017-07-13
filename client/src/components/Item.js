import React, { Component } from 'react';
import { destroyItem } from '../actions/items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemActions from '../containers/ItemActions';
import DoneButton from './DoneButton';

export class Item extends Component {
	handleTrashClick = () => {
		this.props.destroyItem(this.props.id);
	};

	render() {

    const item = this.props.item

    return (
      <div key={item.id} className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {item.item_type}
          </div>
          <div className='meta'>
            {item.description}
          </div>
          <ItemActions
            itemId={item.id}
            canEdit={true}
          />
        </div>
        <DoneButton
          id={item.id}
          done={item.done}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    destroyItem,
  }, dispatch);
};

export const ConnectedItem = connect(null, mapDispatchToProps)(Item);
