import fetch from 'isomorphic-fetch';

export function getTimer() {
	return (dispatch) => {
    return fetch('/api/timers/1', {
      accept: 'application/json',
    }).then(
        res => {
        return res.json()
      }).then(responseJson => {
        dispatch({
          type: 'GET_TIMER',
          time_remaining: responseJson.time_remaining
        })
    })
  }
}

export function updateTimer(attrs) {
  return (dispatch) =>{
  	return fetch('api/timers/1', {
  		headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(attrs)
  	}).then(
  		res => {
  			return res.json()
  		}).then(responseJson => {
  			dispatch({
  			type: 'UPDATE_TIMER',
    		time_remaining: responseJson.time_remaining
  		})
  	})
  }
}

export function resetTimer() {
  return (dispatch) =>{
  	return fetch('api/timers/1', {
  		headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({seconds_remaining: 0})
  	}).then(
  		dispatch({
  			type: 'RESET_TIMER',
    		time_remaining: 0
  		})
  	)
  }
}

export function pauseTimer() {
  return (dispatch) =>{
    return fetch('api/timers/1', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({paused: true})
    }).then(
      res => {
        return res.json()
      }).then(responseJson => {
        dispatch({
        type: 'PAUSE_TIMER',
        paused: true
      })
    })
  }
}

export function startTimer() {
  return (dispatch) =>{
    return fetch('api/timers/1', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({paused: false})
    }).then(
      res => {
        return res.json()
      }).then(responseJson => {
        dispatch({
        type: 'START_TIMER',
        paused: false
      })
    })
  } 
}