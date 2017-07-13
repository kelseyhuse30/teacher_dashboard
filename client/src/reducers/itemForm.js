const initialState = { isOpen: false }

export default (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN_FORM':
			return { isOpen: action.payload }
		case 'CLOSE_FORM':
			return { isOpen: action.payload }
		default:
			return state;
	}
}