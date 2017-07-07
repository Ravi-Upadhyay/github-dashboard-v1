(function(){
  'use strict';
  angular.module('gitDashboard')
  .factory('dataFactory',dataFactory);

  dataFactory.$inject = ['$http','$httpParamSerializerJQLike'];

  function dataFactory($http,$httpParamSerializerJQLike){
    return {
      functionName:functionNameHere
    };

  function functionNameHere(){

    }
  }
})();
