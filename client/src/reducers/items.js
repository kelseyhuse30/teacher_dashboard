export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_ITEMS':
			return action.items
		case 'ADD_ITEM':
			return [
				...state,
				Object.assign({}, action.item)
			];
		case 'UPDATE_ITEM':
			return {
				items: state.items.map((item) => {
					if (item.id === action.id) {
          	return Object.assign({}, item, {
            	description: action.description,
            	type: action.type,
          	});
        	} else {
          	return item;
        	}
				})
			}
		case 'REMOVE_ITEM':
			return {
				items: state.items.filter((item) =>
					item.id !== action.id)
			}
    default:
    	return state;
	}
}