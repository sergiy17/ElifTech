var companiesAppServices = angular.module('companiesAppServices',['ngResource']);

companiesAppServices.factory('Companies',['$http',
	function($http){
		return { 
			getAll: $http.get('/companies.json')
		}
		// return $resource('companies.json',{},{
		// 	query: {method: 'GET', isArray: true},
		// });
}]);
