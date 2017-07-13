const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_ITEMS':
			return action.items
		case 'ADD_ITEM':
			return [ ...state, action.item ]
		case 'COMPLETE_ITEM':
			return state.map((item) => {
					if (item.id === action.itemId) {
          	return { ...item, done: true }
        	} else {
          	return item;
        	};
       });
		case 'UPDATE_ITEM':
			return state.map((item) => {
				if (item.id === action.id) {
        	return action.item
      	} else {
        	return item;
      	}
			})
		case 'DESTROY_ITEM':
			return state.filter((item) =>
					item.id !== action.itemId)
    default:
    	return state;
	}
}