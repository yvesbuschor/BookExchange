angular.module('bookexchange')

.service('bookApi', function($http, $q){
	var LOCAL_TOKEN = "myToken";
	var isAuthenticated = false;
	var authToken;

	function loadUserCredentials() {
		var token = window.localStorage.getItem(LOCAL_TOKEN);
		if(token) {
			useToken(token);
		}
	}

	function storeUserCredentials(token) {
		window.localStorage.setItem(LOCAL_TOKEN, token);
		useToken(token);
	}

	function useToken(token) {
		isAuthenticated = true;
		authToken = token;
		$http.defaults.headers.common['X-API'] = token;
	}

	function destroyToken() {
		authToken = undefined;
		isAuthenticated = false;
		$http.defaults.headers.common['X-API'] = undefined;
		window.localStorage.removeItem(LOCAL_TOKEN);
	}




});