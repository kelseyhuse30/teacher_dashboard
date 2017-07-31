const initialState = { isOpen: false }

export default (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN_NEW_ITEM_FORM':
			return { isOpen: action.payload }
		case 'CLOSE_NEW_ITEM_FORM':
			return { isOpen: action.payload }
		default:
			return state;
	}
}