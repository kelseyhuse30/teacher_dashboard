import React, { Component } from 'react';
import Timer from '../components/Timer';
import { getTimer, resetTimer, updateTimer, pauseTimer, startTimer } from '../actions/timer';
import { closeTimerForm } from '../actions/timerForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimerForm from '../components/TimerForm';

class TimerContainer extends Component {	
	componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.props.time_remaining);
    this.startTimer();
  };

  componentWillMount() {
    this.props.getTimer();
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  tick = () => {
    const { time_remaining } = this.props;
    if (time_remaining > 0) {
      this.props.updateTimer({time_remaining: (time_remaining - 1)})
    } else {
      this.stopTimer();
    }
  };

  cancel = () => {
    this.props.resetTimer();
  };

  handleStartClick = () => {
    this.startTimer();
  }

  handleDoneClick = () => {
    this.stopTimer();
  }

  handleResetClick = () => {
    this.props.resetTimer();
  }

  stopTimer = () => {
    clearInterval(this.interval);
    this.props.pauseTimer();
  };

  startTimer = () => {
    this.interval = setInterval(this.tick, 1000);
    this.props.startTimer();
  };

  cancel = () => {
    console.log("cancel the timer form");
    this.props.closeTimerForm();
  };

  render() {
    if (this.props.form_open) {
      return (
        <TimerForm
          handleCancel={this.cancel}
        />
      )
    } else {
  		return (
        <Timer
  				time_remaining={this.props.time_remaining}
          handleStopClick={this.handleDoneClick}
          handleStartClick={this.handleStartClick}
          handleResetClick={this.handleResetClick}
          paused={this.props.paused}
  			/>
      )
    }
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  	{
  		getTimer,
      resetTimer,
      updateTimer,
      startTimer,
      pauseTimer,
      closeTimerForm,
  	},
  	dispatch);
};

const mapStateToProps = (state) => {
	return {
  	time_remaining: state.timer.time_remaining,
    paused: state.timer.paused,
    form_open: state.timerForm.isOpen
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);