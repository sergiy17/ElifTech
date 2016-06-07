var companyRoutes = angular.module('companyRoutes', []);

companyRoutes.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/companies', {
      templateUrl: 'angularjs_app/components/companies/views/indexCompany.html',
      controller: 'indexCompanyCtrl'
    }).
    // when('/quizzes/new', {
    //   templateUrl: 'angularjs_app/components/companies/views/newCompany.html',
    //   controller: 'newQuizCtrl'
    // }).
    // when('/quizzes/:quizId/edit', {
    //   templateUrl: 'angularjs_app/components/quizzes/views/editQuiz.html',
    //   controller: 'editQuizCtrl'
    // }).
    
    otherwise({
      redirectTo: '/companies'
    });
    // $locationProvider.html5Mode(true);
  }
]);
