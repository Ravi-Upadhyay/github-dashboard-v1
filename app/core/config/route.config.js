/*
 * OBJECTIVE: ROUTING CONFIGURATION
 * THIS FILE CONTAINS ALL ROUTING CONFIGUTRATION (UI-ROUTER)
 */
(function () {

  'use strict';

  angular.module('gitDashboard')
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
      // var access = routingConfig.accessLevels;

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $urlRouterProvider.otherwise('/home');

      var homeState = {
        name: 'home',
        url: '/home',
        template: '<home-component></home-component>',
      };

      $stateProvider.state(homeState);
    });
})();
