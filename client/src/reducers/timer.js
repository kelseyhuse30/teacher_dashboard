const initialState = { elapsed: 0, form_open: true, time_limit: 0 }

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TIMER':
			return action.timer
		case 'START_TIMER':
			return state
		case 'STOP_TIMER':
			return state
		case 'UPDATE_TIMER':
			return state
		case 'CANCEL_TIMER':
			return state
		default:
			return state
  }
}