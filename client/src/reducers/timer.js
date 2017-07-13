const initialState = 0

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TIMER':
			return action.time_remaining
		case 'UPDATE_TIMER':
			return action.time_remaining
		case 'RESET_TIMER':
			return action.time_remaining
		default:
			return state
  }
}