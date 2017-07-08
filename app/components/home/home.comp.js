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

    /*
    * FUNCTION: to be invoked when user submit userName Form on the home page
    * onSuccess it will save name to the persistentStorage, dataService as well
    * as sessionStorage.
    */
    self.submitUserName = function(){
      dataFactory.getUserData(self.hPData.userName).then(function(data){
        if(data.statusCode === 0){
          $mdToast.showSimple('OOPS! Something Went Wrong');
          dataService.setData('userName',undefined);
          self.hPData.dataRec = undefined;
        }
        else{
          //on success first save this user name to persistent storage
          //So page refresh do not break pages.
          console.log(data);

          //Set all data to
          dataService.setData('userName',self.hPData.userName);
          self.hPData.dataRec = {
            avatarImage: data.response.data.avatar_url,
            userName: data.response.data.login,
            name:data.response.data.name,
            userSince:data.response.data.created_at,
            repoCount:data.response.data.public_repos,
            followerCount:data.response.data.followers,
            followingCount:data.response.data.following,
            htmlUrl:data.response.data.html_url,
            email:data.response.data.email
          };
          console.log(self.hPData.dataRec);
        }
      });
    };
  }

})();
