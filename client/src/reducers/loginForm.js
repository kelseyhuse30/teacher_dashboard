const initialState = { currUser: '', redirectToRoot: false }

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURR_USER':
			return { currUser: action.payload, redirectToRoot: true }
		case 'GET_CURR_USER':
			return { currUser: action.username, redirectToRoot: action.redirectToRoot }
		case 'REMOVE_CURR_USER':
			return { currUser: '', redirectToRoot: false }
		default:
			return state;
	}
}