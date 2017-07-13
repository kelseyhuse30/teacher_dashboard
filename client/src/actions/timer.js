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
          timer: responseJson
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
  		dispatch({
  			type: 'UPDATE_TIMER',
    		attrs
  		})
  	)
  }
}

export function stopTimer() {

}

export function startTimer() {

}