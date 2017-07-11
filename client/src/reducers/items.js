import uuidV4  from 'uuid/v4';

export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [
				...state,
				Object.assign({}, action.item, { id: uuidV4() })
			];
    default:
    	return state;
	}
}