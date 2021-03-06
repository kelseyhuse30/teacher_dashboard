import fetch from 'isomorphic-fetch';

export const setCurrUser = (username) => {
	localStorage.setItem('username', username);
	
	return dispatch => {
		return fetch('api/auth', {
			headers: {
				'Accept': 'application/json',
        'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({username})
		}).then(
			res => {
				return res.json()
			}).then(responseJson => {
				dispatch({
		      type: 'SET_CURR_USER',
		      payload: responseJson.username
  			})
			})
		}
}

export const removeCurrUser = () => {
	localStorage.removeItem('username');
	return {
		type: 'REMOVE_CURR_USER',
		payoad: false
	}
}

export const getCurrUserFromBrowser = () => {
  const username = localStorage.getItem("username");
  const userExist = !!username
	return {
		type: 'GET_CURR_USER',
		username: username,
		redirectToRoot: (userExist ? true : false)
	}
}
