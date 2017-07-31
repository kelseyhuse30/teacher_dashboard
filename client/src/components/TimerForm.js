import React from 'react';
import { Field, reduxForm } from 'redux-form'

let TimerForm = props => {
  const {handleSubmit} = props;

  return (
		<div className='ui centered card'>
      <div className='content'>
        <form onSubmit={handleSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='time_remaining'>Time Remaining</label>
            <div>
              <Field
                name='time_remaining'
                component='input'
              	type='number'
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
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

TimerForm = reduxForm({
  form: 'timer'
})(TimerForm);

export default TimerForm;