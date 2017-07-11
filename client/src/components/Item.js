import React, { Component } from 'react';

export class Item extends Component {
	handleTrashClick = () => {
		this.props.onTrashClick(this.props.id);
	};

	render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.type}
          </div>
          <div className='meta'>
            {this.props.description}
          </div>
          <div className='extra content'>
            <span
            	className='right floated edit icon'
            	onClick={this.props.onEditClick}
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
        <div className='ui bottom attached green basic button'>
          Done
        </div>
      </div>
    );
  }
}