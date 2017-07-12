import fetch from 'isomorphic-fetch';

export function fetchItems() {
  return (dispatch) => {
    return fetch('/api/items', {
      accept: 'application/json',
    }).then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({
          type: 'FETCH_ITEMS',
          items: responseJson
        })
    })
  }
}

export function addItem (item) {
  return function(dispatch) {
    dispatch({type: 'ADD_ITEM', item})
    return fetch('http://localhost:3001/items', {
      method: 'post',
      body: JSON.stringify({item})
    }).then(res => {
      //get real ID of item here
      debugger;
    })
  }
 
}

export function removeItem (item) {
  return {
    type: 'REMOVE_ITEM',
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