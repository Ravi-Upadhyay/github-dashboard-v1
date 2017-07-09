(function(){
  'use strict';

  angular.module('gitDashboard')
  .component('followComponent',{
    templateUrl:'components/followers/followers.temp.html',
    controller: ('followController', followController)
  });

  followController.$inject = ['$stateParams','$window','$mdToast','$state','dataService','dataFactory'];

  function followController($stateParams,$window,$mdToast,$state,dataService,dataFactory){
    var self = this;
    self.foData = {
      'userName': dataService.getData('userName'),
      'avatarImage': dataService.getData('avatarImage'),
      'name': dataService.getData('name'),
      'sortMechanism':'followerCount',
      'pageMode':dataService.getData('pageMode'),
      'dataRec':[],
      'dataExtracted':[]
    };

    self.extractData = function(){
      if(self.foData.dataRec.length !== 0){
        console.log('inside extractData function');
        angular.forEach(self.foData.dataRec,function(value){
          console.log(value.login);
          dataFactory.getUserData(value.login).then(function(data){
            if(data.statusCode === 0){
              //If any error handling mechanism
            }
            else{

              var userData = {
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
              self.foData.dataExtracted.push(userData);
              console.log(data);
              console.log(userData)  
            }
          });
        });
      }
      console.log(self.foData.dataExtracted);
    };

    /*
    * FUNCTION: self invoked function invoked after screen is loaded.
    * it will load data from API based on pageMode parameter. Because same controller will be used
    * to show followers and following
    */

    (function(){

      if(self.foData.pageMode === 'FOLLOWERS'){
        dataFactory.getFollowerData(self.foData.userName).then(function(data){
          if(data.statusCode === 0){
            $mdToast.showSimple('OOPS! Something Went Wrong');
          }
          else{
            self.foData.dataRec = data.response.data;
            console.log(self.foData.dataRec);
             self.extractData();            
            // console.log(data);
          }
        });
      }

      else if(self.foData.pageMode === 'FOLLOWING'){
        dataFactory.getFollowingData(self.foData.userName).then(function(data){
          if(data.statusCode === 0){
            $mdToast.showSimple('OOPS! Something Went Wrong');
          }
          else{
            self.foData.dataRec = data.response.data;
            console.log(self.foData.dataRec);
            self.extractData();
            // console.log(data);
          }
        });
      }
    })();    
  }

})();
