(function(){
  'use strict';

  angular.module('gitDashboard')
  .component('homeComponent',{
    templateUrl:'components/home/home.temp.html',
    controller: ('homeController', homeController)
  });

  homeController.$inject = ['dataService','dataFactory'];

  function homeController(dataService,dataFactory){
    var self = this;
    self.hPData = {
      userName:'',
      dataRec:undefined
    };    
  }

})();
