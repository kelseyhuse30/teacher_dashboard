import fetch from 'isomorphic-fetch';

export function fetchItems() {

  return function(dispatch){
    dispatch({type: 'LOADING_ITEMS'})
    return fetch('http://localhost:3001/items')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_ITEMS', items: responseJson.items})
    })
    // return items;
  }
}

export function addItem (id, description, type, done) {
  return {
    type: 'ADD_ITEM',
    id,
    description,
    type,
    done
  }
}

export function removeItem (id, item) {
  return {
    type: 'REMOVE_ITEM',
    id,
    item
  }
}

export function updateItem(item) {
  return dispatch => {
    fetch(`http://localhost:3001/items/${item.id}`,
    {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(res => res.json())
      .then(responseJson => {
        dispatch({type: 'UPDATE_ITEM', item: responseJson})
      }
    )
  }
}