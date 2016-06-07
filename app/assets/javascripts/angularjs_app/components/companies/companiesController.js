var companiesControllers = angular.module('companiesControllers', []);

// companiesControllers.controller('newQuizCtrl',
//   ['$scope', '$http', '$location', 'Companies', 'CompaniesHelper',
//   function($scope, $http, $location, Companies, CompaniesHelper) {
//     $scope.quiz = {questions_attributes:[{content: ''}]};


//     $scope.removeQuestion = function(question) {
//       var questionIndex = $scope.quiz.questions_attributes.indexOf(question);
//       $scope.quiz.questions_attributes.splice(questionIndex, 1);
//     };

//     $scope.createCompany = function(){
//       Companies.save({company: $scope.company});
//       $location.path('/companies');
//     };
//   }
// ]);

companiesControllers.controller('indexCompanyCtrl',
  ['$scope', '$location','Companies',
  function($scope, $location, Companies) {
    console.log('Hello');

    Companies.getAll.then(function(response){
      $scope.companies = response.data;
    });

    // $scope.currentPage = 1;

    // $scope.setPage = function() {
    //   Quizzes.query({page: $scope.currentPage}, function(data) {
    //     $scope.quizzes      = data.collection;
    //     $scope.totalQuizzes = data.total_items;
    //   });
    // };

    // $scope.setPage();

  }
]);

// companiesControllers.controller('editQuizCtrl',
//   ['$scope', '$routeParams', '$location', 'Quiz', 'QuestionsHelper',
//   function($scope, $routeParams, $location, Quiz, QuestionsHelper) {
//     $scope.quiz = Quiz.show({quizId: $routeParams.quizId});

//     $scope.limit          = QuestionsHelper.limit;
//     $scope.restrictAdding = QuestionsHelper.restrictAdding;
//     $scope.countQuestions = QuestionsHelper.countQuestions;
//     $scope.checkAbsence   = QuestionsHelper.checkAbsence;
//     $scope.addQuestion    = QuestionsHelper.pushEmptyQuestionTo;

//     $scope.removeQuestion = function(question) {
//       question._destroy = true;
//     };

//     $scope.editQuiz = function() {
//       Quiz.update({
//         quizId: $routeParams.quizId,
//         quiz:   $scope.quiz
//       }, function() {
//         $location.path('/quizzes');
//       });
//     };
//   }]
// );

// companiesControllers.controller('startQuizCtrl',
//   ['$scope', '$routeParams', 'Quiz',
//   function($scope, $routeParams, Quiz) {
//     $scope.quiz = Quiz.get({quizId: $routeParams.quizId});
//   }
// ]);

// companiesControllers.controller('showQuizCtrl',
//   ['$scope', 'Quiz', '$routeParams', 'QuestionsHelper',
//   function($scope, Quiz, $routeParams, QuestionsHelper) {
//     $scope.quiz = Quiz.show({quizId: $routeParams.quizId});

//     $scope.checkAbsence = QuestionsHelper.checkAbsence;
//   }
// ]);
