/*
* OBJECTIVE: factory end-point to communicate with all apis for this project.
* it will also have small common mechanism to handle $http failures
*/
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

  /*
  * FUNCTION: gets userdata when username provided. returns
  * statusCode , response. If $http failed status code will be 0 else 1.
  */
  function getUserData(userName){
    var url = getUrl(0,userName);
    return $http.get(url).then(onSuccess,onFailure);
  }
  
  /*
  * FUNCTION: gets repos when username provided. returns
  * statusCode , response. If $http failed status code will be 0 else 1.
  */
  function getRepoData(userName){
      var url = getUrl(1,userName);
      return $http.get(url).then(onSuccess,onFailure);
    }

  /*
  * FUNCTION: gets followers when username provided. returns
  * statusCode , response. If $http failed status code will be 0 else 1.
  */
  function getFollowerData(userName){
      var url = getUrl(2,userName);
      return $http.get(url).then(onSuccess,onFailure);
    }

  /*
  * FUNCTION: gets following when username provided. returns
  * statusCode , response. If $http failed status code will be 0 else 1.
  */
  function getFollowingData(userName){
      var url = getUrl(3,userName);
      return $http.get(url).then(onSuccess,onFailure);
  }
  
  /*
  * FUNCTION: returns url to be used by $http service depending on username and and apiIndex,
  * apiIndex, is mapping of which api we want to call. Only for cleaner representation.
  */
  function getUrl(apiIndex,userName){
    var url, baseUrl = 'https://api.github.com/users/';
    
    switch(apiIndex){
      
      //For Repo Details
      case 1:
        var apiUrl = [
          baseUrl,
          userName,
          '/repos'
        ];
        url = apiUrl.join('');
      break;
      
      //For Followers Details
      case 2:
        var apiUrl = [
          baseUrl,
          userName,
          '/followers'
        ];
        url = apiUrl.join('');
      break;
      
      //For Following Details
      case 3:
        var apiUrl = [
          baseUrl,
          userName,
          '/following'
        ];
        url = apiUrl.join('');
      break;

      //For User Details
      default:
        var apiUrl = [
          baseUrl,
          userName
        ];
        url = apiUrl.join('');
    }
    return url;
  }

  /*
  * FUNCTION: to be passed as when $http returns success, it returns res object. which will
  * contain statusCode and response. response will have actual response we got. stautsCode is to 
  * greet user with proper message on failure
  */
  function onSuccess(response){
    var res = {
      'statusCode' : 1,
      'response':response
    };
    return res;
  }
  
  /*
  * FUNCTION: to be passed as when $http returns failure, it returns res object. which will
  * contain statusCode. stautsCode is to greet user with proper message on failure
  */
  function onFailure(response){
    var res = {
      'statusCode' : 0
    };
    return res;
  }
  }
})();
