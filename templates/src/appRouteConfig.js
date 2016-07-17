
function appViewRouteConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/hello'); // ('/home'); // ('/preface') ('/login'); //home.testbed.todoTemp
    $stateProvider
        .state('hello', {
            url: '/hello',
            controller: 'helloController',
            template: require('./hello/partial/hello.html')

        })


}

module.exports =  appViewRouteConfig;