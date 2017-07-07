(function(){
  'use strict';

  angular.module('gitDashboard')
  .component('repoComponent',{
    templateUrl:'components/repos/repos.temp.html',
    controller: ('repoController', repoController)
  });

  repoController.$inject = [];

  function repoController(){
    
  }

})();