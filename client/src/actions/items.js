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
  return dispatch => {
    dispatch({type: 'ADD_ITEM', item})
    return fetch('/api/items', {
      method: 'post',
      body: JSON.stringify({item})
    }).then(res => {
      //get real ID of item here
      debugger;
    })
  }
 
}

export function completeItem(itemId) {
  debugger;
  return dispatch => {
    dispatch({type: 'COMPLETE_ITEM', itemId})
    return fetch(`/api/items/${itemId}`, {
      method: 'patch',
      body: { 'done' : true }
    })
  }
}

export function destroyItem (itemId) {
  return {
    type: 'DESTROY_ITEM',
    itemId
  }
}

export function updateItem(item) {
  return dispatch => {
    fetch(`/api/items/${item.id}`,
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