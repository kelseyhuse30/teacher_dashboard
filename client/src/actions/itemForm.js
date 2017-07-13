export const openForm = () => {
  return {
      type: 'OPEN_FORM',
      payload: true
  }
}

export const closeForm = () => {
  return {
      type: 'CLOSE_FORM',
      payload: false
  }
}