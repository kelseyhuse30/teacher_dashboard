export const openNewItemForm = () => {
  return {
      type: 'OPEN_NEW_ITEM_FORM',
      payload: true
  }
}

export const closeNewItemForm = () => {
  return {
      type: 'CLOSE_NEW_ITEM_FORM',
      payload: false
  }
}