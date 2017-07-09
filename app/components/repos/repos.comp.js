(function(){
  'use strict';

  angular.module('gitDashboard')
  .component('repoComponent',{
    templateUrl:'components/repos/repos.temp.html',
    controller: ('repoController', repoController)
  });

  repoController.$inject = ['$mdToast','$state','dataService','dataFactory'];

  function repoController($mdToast,$state,dataService,dataFactory){

    var self=this;
    
    self.rpData ={
      'userName': dataService.getData('userName'),
      'avatarImage': dataService.getData('avatarImage'),
      'name': dataService.getData('name'),
      'dataRec':undefined
    };

    (function(){
      dataFactory.getRepoData(self.rpData.userName).then(function(data){
        if(data.statusCode === 0){
          $mdToast.showSimple('OOPS! Something Went Wrong');
        }
        else{
          self.rpData.dataRec = data.response.data;
          console.log(self.rpData.dataRec);
        }
      });
    })();
    
  }

})();