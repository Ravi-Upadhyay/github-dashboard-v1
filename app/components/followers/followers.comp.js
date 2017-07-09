(function(){
  'use strict';

  angular.module('gitDashboard')
  .component('followComponent',{
    templateUrl:'components/followers/followers.temp.html',
    controller: ('followController', followController)
  });

  followController.$inject = [];

  function followController(){
    
  }

})();
