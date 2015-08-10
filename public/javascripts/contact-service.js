(function () {
  "use strict";

  angular.module("Contacts").
    service('ContactService', ['$http','CONTACTS_URL', function ($http, CONTACTS_URL) {
      var contacts = [];

      console.log("service says hi");
      return {
        getContacts: getContacts,
        getContact: getContact,
        deleteContact: deleteContact,
        addContact: addContact,
        updateContact: updateContact
      };

      // returns all of the contacts
      function getContacts() {
        return $http.get(CONTACTS_URL);
      }

      // returns a single contact
      function getContact(id) {
        return $http.get(CONTACTS_URL + '/' + id);
      }

      // deletes a single contact
      function deleteContact(id) {
        return $http.delete(CONTACTS_URL + '/' + id);
      }

      // adds a new contact
      function addContact(contact) {
        return $http.post(CONTACTS_URL, contact);
      }

      // update a contact
      function updateContact(id, contact) {
        return $http.put(CONTACTS_URL, {"contact": contact});
      }
    }]);
}());