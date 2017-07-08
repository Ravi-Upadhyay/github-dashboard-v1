(function(){
  'use strict';
  angular.module('gitDashboard')
  .factory('dataFactory',dataFactory);

  dataFactory.$inject = ['$http','$httpParamSerializerJQLike'];

  function dataFactory($http,$httpParamSerializerJQLike){
    return {
      getUserData:getUserData,
      getRepoData:getRepoData,
      getFollowerData:getFollowerData,
      getFollowingData:getFollowingData
    };
  
  function getUserData(userName){
    
    var gud = this;
    gud.url = 'https://api.github.com/users/'+userName;

    gud.onSuccess = function(response){
      var res = {
        'statusCode' : 1,
        'response':response
      };
      return res;
    };
    gud.onFailure = function(respone){
      var res = {
        'statusCode' : 0
      };
      return res;
    };

    return $http.get(gud.url).then(gud.onSuccess,gud.onFailure);
  }
  


  function getRepoData(){
    onSuccess = function(response){
      return response;
    };
    onFailure = function(respone){
      return response;
    };
    $http.get('https://api.github.com/users/ravi-upadhyay').then(onSuccess,onFailure);
    }
  function getFollowerData(){
    onSuccess = function(response){
      return response;
    };
    onFailure = function(respone){
      return response;
    };
    $http.get('https://api.github.com/users/ravi-upadhyay').then(onSuccess,onFailure);
    }
  function getFollowingData(){
    onSuccess = function(response){
      return response;
    };
    onFailure = function(respone){
      return response;
    };
    $http.get('https://api.github.com/users/ravi-upadhyay').then(onSuccess,onFailure);
    }
  }
})();
