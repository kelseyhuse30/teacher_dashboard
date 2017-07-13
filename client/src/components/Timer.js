import React, { Component } from 'react';

export class Timer extends Component {
  render() {

    const timer = this.props.timer

    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            Timer Countdown
          </div>
          <div className='description'>
            {timer.time_limit}
          </div>
          <span
          className='right floated edit icon'
          onClick={this.props.handleEditClick}
        >
          <i className='edit icon' />
        </span>
        <span
          className='right floated trash icon'
          onClick={this.props.handleResetClick}
        >
          <i className='trash icon' />
        </span>
        </div>
        <div
          className='ui bottom attached red basic button'
          onClick={this.props.handleStopClick}
        >
          Stop
        </div>
      </div>
    );
  }
}