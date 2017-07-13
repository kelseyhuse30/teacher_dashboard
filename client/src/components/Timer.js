import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTimer, resetTimer } from '../actions/timer';
import { openTimerForm } from '../actions/timerForm'

export class Timer extends Component {

  handleEditClick = () => {
    console.log(this.props)
    this.props.openTimerForm()
  }

  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            Timer Countdown
          </div>
          <div className='description'>
            {this.props.time_remaining}
          </div>
          <span
          className='right floated edit icon'
          onClick={(e) => this.handleEditClick()}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTimer,
    resetTimer,
    openTimerForm,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Timer);