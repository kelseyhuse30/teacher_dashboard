export const openTimerForm = () => {
  return {
      type: 'OPEN_TIMER_FORM',
      payload: true
  }
}

export const closeTimerForm = () => {
  return {
      type: 'CLOSE_TIMER_FORM',
      payload: false
  }
}