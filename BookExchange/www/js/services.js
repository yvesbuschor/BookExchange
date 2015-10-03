angular.module('bookexchange')

.service('bookApi', function($http, $q){
	var LOCAL_TOKEN = "bookexchangeToken";
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

	var login = function(loginData) {
		return $q(function(resolve, reject) {
;        $http.post("http://bookexchange.scapp.io/gettoken", loginData).success(function(data, status) {
  
				if(data.token){
					storeUserCredentials(token);
					resolve('Login successful');
				} else {
					reject('login failed');
				}
			}, function(){
				reject('login failed');
			});
		});
	};

	var logout = function() {
		destroyToken();
	};

	loadUserCredentials();

	return {
		login: login,
		logout: logout,
		isAuthenticated: function() {return isAuthenticated}
	};
})