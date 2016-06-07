var companiesApp = angular.module('companiesApp', [
  'templates',
  'ngRoute',
  'ngResource',
  'companyRoutes',
  'companiesControllers',
  'companiesAppServices'
]);


companiesApp.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
});