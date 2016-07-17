

var app = angular.module('<%= appName %>', [
	'ui.router',
  'ui.bootstrap',
  '<%= appName %>.hello'

]);
app
    .config(require('../src/appRouteConfig.js'))

;