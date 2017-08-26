var App = angular.module('App', ['ngRoute', 'ui.bootstrap', 'chart.js']);

App.controller('MainController', MainController);
App.controller('GridController', GridController);
App.controller('ProductController', ProductController);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/grid', {
            templateUrl: 'SinglePageApp/View/Grid.html',
            controller: GridController
        })
        .otherwise({
            redirectTo: function () {
                return '/grid';
            }
        });
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

App.config(configFunction);