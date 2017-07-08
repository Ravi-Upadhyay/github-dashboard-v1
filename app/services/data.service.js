(function(){
  'use strict';
  angular.module('gitDashboard')
  .service('dataService',dataService);

  dataService.$inject = ['$window'];

  function dataService($window){
    var self = this;
    self.gitData = {};

    /*
    * FUNCTION: provided key,value it will store to gitData object of the dataService as well as
    * sessionStorage for persistent storage.
    */
    self.setData = function(key,value){
      self.gitData[key] = value;
      self.setSessLocal(key,value);
    };

    /*
    * FUNCTION: provided key it will return value. first it tries to get from dataService  if not
    * found. It will return from sessionStorage.
    */
    self.getData = function(key){
      if(self.gitData[key] !== undefined){
        return self.gitData[key];
      }
      else{
       return self.getSessLocal(key);
      }
    };

    /*
    * FUNCTION: set sessionStorage of browser to enable persistent storage
    */
    self.setSessLocal = function(key,value){
      /*
      * If gitData is not set in sessionStorage create a new variable then save into
      * Session Storage after converting into string. If gitData is exists then get 
      * the object, update values then again save.
      */
      var gitData = $window.sessionStorage.getItem('gitData');
      
      if(gitData === null){
        gitData = {};
        gitData[key] = value;
      }
      else{
        gitData = JSON.parse(gitData);
        gitData[key] = value;
      }

      $window.sessionStorage.setItem('gitData', JSON.stringify(gitData)); 
    };

    self.getSessLocal = function(key){

      /* 
      * If gitData is not set in session then return undefined. Else get gitData and
      * parse it to get the required value. If value not find inside hsOrder data, you will 
      * receive undefined.
      */
      var gitData = $window.sessionStorage.getItem('gitData');

      if(gitData === null){
        return undefined;
      }
      else{
        gitData = JSON.parse(gitData);
        return gitData[key];
      }

    };
  }
})();
