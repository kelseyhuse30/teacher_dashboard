import React, { Component } from 'react';
import { destroyItem } from '../actions/items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemActions from '../containers/ItemActions';
import DoneButton from './DoneButton';
import UpvoteButton from './UpvoteButton';

export class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voteCount: 0
    }
  }

	handleTrashClick = () => {
		this.props.destroyItem(this.props.id);
	};

//from code review assessment
  // handleUpvote = () => {
  //   console.log('a')
  //   fetch('/api/items', {
  //     accept: 'application/json',
  //   }).then(
  //       res => {
  //         console.log('b')
  //       return res.json()
  //     }).then(responseJson => {
  //       console.log('c')
  //   })
  //     console.log('d')
  // }

	render() {

    const { item } = this.props

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
