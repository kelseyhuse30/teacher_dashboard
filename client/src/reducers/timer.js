const initialState = {time_remaining: 0, paused: false}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TIMER':
			return {...state, time_remaining: action.time_remaining}
		case 'UPDATE_TIMER':
			return {...state, time_remaining: action.time_remaining}
		case 'RESET_TIMER':
			return {...state, time_remaining: action.time_remaining}
		case 'PAUSE_TIMER':
			return { ...state, paused: true}
		case 'START_TIMER':
			return { ...state, paused: false}
		default:
			return state
  }
}