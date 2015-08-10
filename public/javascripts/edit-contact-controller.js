(function () {
  "use strict";

  // code to edit a contact

  angular.module("Contacts")
    .controller("EditContactController", function($scope, $routeParams, ContactService, $location){
      var id = $routeParams.id;

      $scope.currentContact = {};

      ContactService.getContact(id).then(function(data){
        // if we are using $http
         $scope.currentContact = data.data;

        // if we are using FireBase, it is simply in data
       // $scope.currentContact = data[id];
        // this is necessary since I once spelled it as "eMail" not email and I am too lazy to make correction
        $scope.currentContact.email = $scope.currentContact.email || $scope.currentContact.eMail;
      });

      $scope.update = function() {
        ContactService.updateContact(id, $scope.currentContact);
        $location.path('/contacts');
      };

      $scope.clear = function(){
        $scope.currentContact = {};
      };
    });
}());