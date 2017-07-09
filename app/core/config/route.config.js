/*
 * OBJECTIVE: ROUTING CONFIGURATION
 * THIS FILE CONTAINS ALL ROUTING CONFIGUTRATION (UI-ROUTER)
 */
(function () {

  'use strict';

  angular.module('gitDashboard')
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

      //Logic to remove hash logic, from the url
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $urlRouterProvider.otherwise('/home');

      var home = {
        name: 'home',
        url: '/home',
        template: '<home-component></home-component>',
      };
      var repos = {
        name: 'repos',
        url: '/repos',
        template: '<repo-component></repo-component>',
      };
      var followers = {
        name: 'followers',
        url: '/followers',
        template: '<follow-component></follow-component>',
      };

      $stateProvider.state(home);
      $stateProvider.state(repos);
      $stateProvider.state(followers);
    });
})();
