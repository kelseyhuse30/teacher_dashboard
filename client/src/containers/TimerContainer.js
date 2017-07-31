import React, { Component } from 'react';
import Timer from '../components/Timer';
import { getTimer, updateTimer, resetTimer } from '../actions/timer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimerForm from '../components/TimerForm';

class TimerContainer extends Component {	
	componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  };

  tick = () => {
    updateTimer({time_remaining: this.props.time_remaining - 1});
    if (this.props.time_remaining <= 0) {
      clearInterval(this.interval);
    }
  };

  handleDoneClick = () => {
    this.stopTimer();
  };

  stopTimer = () => {
    clearInterval(this.interval);
  };

  startTimer = () => {
    this.interval = setInterval(this.tick, 1000);
  };

  submit = (values) => {
    console.log("submit the timer form");
    console.log(values);
  };

  cancel = () => {
    console.log("cancel the timer form");
  };

  render() {
    if (this.props.form_open) {
      return (
        <TimerForm
          time_remaining={this.props.time_remaining}
          handleSubmit={this.submit}
          handleCancel={this.cancel}
        />
      )
    } else {
  		return (
        <Timer
  				time_remaining={this.props.time_remaining}
          handleStopClick={this.handleDoneClick}
          handleStartClick={this.handleStartClick}
  			/>
      )
    }
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  	{
  		getTimer,
      updateTimer,
      resetTimer,
  	},
  	dispatch);
};

const mapStateToProps = (state) => {
	return {
  	time_remaining: state.timer,
    form_open: state.timerForm.isOpen
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);