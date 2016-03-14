// index.js --- loaded from webpack via `entry` hook

var angular = require('angular');

// Declare module `app`, angular dependency modules go here
angular.module('app', [])

angular.bootstrap(document.body, ['app'])
