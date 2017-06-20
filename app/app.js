require('angular');
require('angular-route');
require('./locale/angular-locale_pt-br.js');

var routeConfig  = require('./config/routeConfig.js');
var configConstant  = require('./config/configConstant.js');
var configValue  = require('./config/configValue.js');
var configBonusProvider  = require('./config/configBonusProvider.js');
var bonusGenerator  = require('./services/bonusGenerator.js');
var clientAPIService  = require('./services/clientAPIService.js');
var clientTestService  = require('./services/clientTestService.js');
var MainController = require('./controllers/MainController');
var maskTel = require('./directives/maskTel.js');
var alertMsg = require('./directives/alertMsg.js');



angular.module('app', ['ndRoute']);
angular.module('app').constant('configConstant',configConstant);
angular.module('app').value('configValue',configValue);
angular.module('app').provider('bonusGenerator',[bonusGenerator]);

angular.module('app').config(['bonusGeneratorProvider','configConstant',configBonusProvider]);
angular.module('app').config(['$routeProvider',routeConfig]);

angular.module('app').factory('clientAPIService',['$http','configValue',clientAPIService]);
angular.module('app').service('clientTestService',['$http','configValue',clientTestService]);
angular.module('app').directive('maskTel', [maskTel]);
angular.module('app').directive('alertMsg', [alertMsg]);
angular.module('app').controller('MainController',['$scope','$http','$filter','clientAPIService','clientTestService','configValue','bonusGenerator',MainController]);
