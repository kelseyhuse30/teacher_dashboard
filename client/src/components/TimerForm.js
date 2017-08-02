import React, { Component } from 'react';
import { updateTimer } from '../actions/timer';
import { closeTimerForm } from '../actions/timerForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TimerForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time_remaining: 0
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.updateTimer({time_remaining: this.state.time_remaining});
    this.props.closeTimerForm();
  }

  render() {
    return (
  		<div className='ui centered card'>
        <div className='content'>
          <form className='ui form' onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className='field'>
              <label htmlFor='time_remaining'>Time Remaining</label>
              <div>
                <input
                  name='time_remaining'
                	type='number'
                  value={this.state.time_remaining}
                  onChange={(e) => this.setState({time_remaining: e.target.value})}
                />
              </div>
            </div>
            <div className='ui two bottom attached buttons'>
              <button
              	className='ui basic blue button'
              	type='submit'
              >
                Submit
              </button>
              <button
              	className='ui basic red button'
              	type='button'
                onClick={this.props.handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTimer,
      closeTimerForm,
    },
    dispatch);
};

export default connect(null, mapDispatchToProps)(TimerForm);