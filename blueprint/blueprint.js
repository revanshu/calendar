(function(){
   var myApp = angular.module("Appointment",[]);
   myApp.controller('AppointmentController',[
        '$scope',            
       function($scope){
          $scope.name = "rev";
           $scope.date = new Date();
       
       }]);   
})();