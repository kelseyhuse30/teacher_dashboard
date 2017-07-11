import uuidV4  from 'uuid/v4';

export default (state = { items: [] }, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [
				...state,
				Object.assign({}, action.item, { id: uuidV4() })
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