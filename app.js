(function(){
   var myApp = angular.module("Appointment",[]);
   myApp.controller('AppointmentController',[
        '$scope',            
       function($scope){
          $scope.name = "rev";  
          $scope.content = []; 
           var today = new Date();
           var storage = {};
           var timings = [
               {
                   value:"9.00 - 10.00",
                   selected:false
               },
               {
                   value:"10.00 - 11.00",
                   selected:false
               },
               {
                   value:"11.00 - 12.00",
                   selected:false
               },
               {
                   value:"12.00 - 1.00",
                   selected:false
               },
               {
                   value:"1.00 - 2.00",
                   selected:false
               },
               {
                   value:"2.00 - 3.00",
                   selected:false
               },
           ]
           $scope.date = new Date();
           $scope.dateTabs = [];
           function init(){
               var locationDate = storage.indexOf(today);
               if(locationDate != -1){
                   for(var i =locationDate; i<locationDate+7;i++){
                       $scope.dateTabs.push(storage[i]);
                   }
               }else{
                   for(var i=0; i<7;i++){
                       var nextDate = angular.copy(today);
                       nextDate.setDate(nextDate.getDate() + i);
                       $scope.dateTabs.push({
                           value: nextDate,
                           timing: angular.copy(timings),
                           availableSlot: timings.length,
                           disabled: false
                       })
                   };
               }
           }
           init();
           $scope.tabClicked = function(tab){
               $scope.content = tab;
           };
           $scope.timingClicked = function(timing,tab){
               timing.selected = !timing.selected;
               if(timing.selected){
                   tab.availableSlot -= 1;
               }else{
                   tab.availableSlot += 1;
               }
           };
           $scope.previousClicked = function(){
               if(storage.indexOf(today) === -1){
                   for(var i=0; i<$scope.dateTabs.length; i++){
                       storage[$scope.dateTabs[i].value] = $scope.dateTabs
                   }
               }
               today.setDate(today.getDate() - 7);
               $scope.dateTabs = [];
               $scope.content = [];
               init();
           }
           $scope.nextClicked = function(){
               today.setDate(today.getDate() + 7);
               $scope.dateTabs = [];
               $scope.content = [];
               init();
           }
       }]);   
})();