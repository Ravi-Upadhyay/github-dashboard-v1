(function(){
  'use strict';

  angular.module('gitDashboard')
  .component('homeComponent',{
    templateUrl:'components/home/home.temp.html',
    controller: ('homeComtoller', homeComtoller)
  });

  homeComtoller.$inject = [];

  function homeComtoller(){
    
  }

})();
