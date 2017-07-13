const initialState = 0

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_EDIT_ID':
			return action.id
		default:
			return state;
	}
}