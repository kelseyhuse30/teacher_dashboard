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

export function addItem(item){
  return {
    type: "ADD_ITEM",
    item
  }
}