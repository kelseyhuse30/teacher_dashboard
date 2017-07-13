import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTimer } from '../actions/timer';
import { closeTimerForm } from '../actions/timerForm';

class TimerForm extends Component {
	constructor(props) {
    super(props);

    this.state = {
      time_remaining: this.props.timer.time_remaining || '',
    }
  }

	handleSubmit = () => {
		console.log(this.props)
		this.props.updateTimer({time_remaining: this.state.time_remaining})
		this.props.closeTimerForm()
	};

	handleClose = () => {
		this.props.closeTimerForm()
	};

	render() {
		return (
			<div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Time Remaining</label>
              <input
              	type='number'
              	value={this.state.time_remaining}
              	onChange={(e) => this.setState({time_remaining: e.target.value})}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
              	className='ui basic blue button'
              	onClick={(e) => this.handleSubmit()}
              >
                Submit
              </button>
              <button
              	className='ui basic red button'
              	onClick={(e) => this.handleClose()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTimer,
    closeTimerForm,
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    timer: state.timer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerForm);