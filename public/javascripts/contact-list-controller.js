(function () {
  "use strict";

  // code to list the contacts and delete them
  angular.module('Contacts')
    .controller('ContactsListController', ['$scope', 'ContactService',
      function ($scope, ContactService) {
        // if we are using local storage, the contacts can retrieved directly
        // $scope.contacts = ContactService.getContacts();

        $scope.contacts = [];

        ContactService.getContacts().then(function (data) {
          // if we are using $http the data is in data.data
          // $scope.contacts = data.data;

          // if we are using FireBase, it is simply in data
          $scope.contacts = data;
        });

        $scope.delete = function (id) {
          ContactService.deleteContact(id)

        };
      }]);
}());