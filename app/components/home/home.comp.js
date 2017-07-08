(function(){
  'use strict';

  angular.module('gitDashboard')
  .component('homeComponent',{
    templateUrl:'components/home/home.temp.html',
    controller: ('homeController', homeController)
  });

  homeController.$inject = ['$mdToast','dataService','dataFactory'];

  function homeController($mdToast,dataService,dataFactory){
    var self = this;
    self.hPData = {
      userName:'',
      dataRec:undefined
    };   

    self.submitUserName = function(){
      dataFactory.getUserData(self.hPData.userName).then(function(data){
        if(data.statusCode === 0){
          //$http returned failure
          $mdToast.showSimple('OOPS! Something Went Wrong');
        }
        else{
          console.log(data);
        }
      });
    };
  }

})();
