var companyRoutes = angular.module('companyRoutes', []);

companyRoutes.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/companies', {
      templateUrl: 'angularjs_app/components/companies/views/indexCompany.html',
      controller: 'indexCompanyCtrl'
    }).
    when('/quizzes/new', {
      templateUrl: 'angularjs_app/components/companies/views/newCompany.html',
      controller: 'newQuizCtrl'
    }).
    when('/quizzes/:quizId/edit', {
      templateUrl: 'angularjs_app/components/quizzes/views/editQuiz.html',
      controller: 'editQuizCtrl'
    }).
    when('/quizzes/:quizId', {
      templateUrl: 'angularjs_app/components/quizzes/views/showQuiz.html',
      controller: 'showQuizCtrl'
    }).
    when('/quizzes/:quizId/start', {
      templateUrl: 'angularjs_app/components/quizzes/views/startQuiz.html',
      controller: 'startQuizCtrl'
    }).
    when('/quizzes/:quizId/finish', {
      templateUrl: 'angularjs_app/components/quizzes/views/finishQuiz.html'
    }).
    when('/video_recorder', {
      templateUrl: 'angularjs_app/shared/video_recorder/testingPage.html',
    }).
    when('/', {
      templateUrl: 'angularjs_app/components/home/views/index.html',
      controller: 'popUpCtrl'
    }).
    otherwise({
      redirectTo: '/quizzes'
    });
    $locationProvider.html5Mode(true);
  }
]);
