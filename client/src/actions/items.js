import fetch from 'isomorphic-fetch';

export function fetchItems() {
  return (dispatch) => {
    return fetch('/api/items', {
      accept: 'application/json',
    }).then(
        res => {
        return res.json()
      }).then(responseJson => {
        dispatch({
          type: 'FETCH_ITEMS',
          items: responseJson
        })
    })
  }
}

export function openEditForm(itemId) {
  return (dispatch) => {
    return fetch(`/api/items/${itemId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({ form_open: true })
    }).then(
      dispatch({
        type: 'OPEN_ITEM_EDIT_FORM',
        itemId: itemId
      })
    )
  }
}

export function closeEditForm(itemId) {
  return (dispatch) => {
    return fetch(`/api/items/${itemId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({ form_open: false })
    }).then(
      dispatch({
        type: 'CLOSE_ITEM_EDIT_FORM',
        itemId: itemId
      })
    )
  }
}

export function addItem(item) {
  return dispatch => {
    return fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(res => {
      return res.json()
    }).then(responseJson => {
      dispatch({
        type: 'ADD_ITEM',
        item: responseJson
      })
    })
  }
}

export function completeItem(itemId) {
  return (dispatch) => {
    return fetch(`/api/items/${itemId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({ done: true })
    }).then(
      dispatch({
        type: 'COMPLETE_ITEM',
        itemId: itemId
      })
    )
  }
}

export function destroyItem(itemId) {
  return (dispatch) => {
    return fetch(`/api/items/${itemId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
      body: JSON.stringify({ id: itemId })
    }).then(
      dispatch({
        type: 'DESTROY_ITEM',
        itemId: itemId
      })
    )
  }
}

export function updateItem(itemId, fields) {
  const fieldsToSend = fields;
  fieldsToSend.form_open = false;
  return dispatch => {

    console.log(JSON.stringify(fields))
    fetch(`/api/items/${itemId}`,
    {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fieldsToSend)

    }).then(res => res.json())
      .then(responseJson => {
        dispatch({
          type: 'UPDATE_ITEM',
          item: responseJson
        })
      }
    )
  }
}