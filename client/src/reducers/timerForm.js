const initialState = { isOpen: false }

export default (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN_TIMER_FORM':
			return { isOpen: action.payload }
		case 'CLOSE_TIMER_FORM':
			return { isOpen: action.payload }
		default:
			return state;
	}
}