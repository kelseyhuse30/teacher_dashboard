import React, { Component } from 'react';
import { Timer } from '../components/Timer';
import { getTimer, updateTimer, stopTimer, startTimer } from '../actions/timer';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import helpers from '../helpers';

class TimerContainer extends Component {	
	componentDidMount() {
    this.props.getTimer();
    //setInterval(this.props.getTimer, 5000);
  };

  handleDoneClick = () => {
    stopTimer();
  }

  render() {
		return (
      <Timer
				timer={this.props.timer}
        handleDoneClick={this.handleDoneClick}
			/>
    )
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  	{
  		getTimer,
      updateTimer,
      stopTimer,
      startTimer
  	},
  	dispatch);
};

const mapStateToProps = (state) => {
	return {
  	timer: state.timer
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);