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

  function functionNameHere(){

    }
  }
})();
