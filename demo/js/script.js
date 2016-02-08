angular.module('exampleApp', [
   'angular-cards'
])
.controller('exampleCtrl', function(){
   var vm = this;
   
   vm.showAlert = function() {
      alert('This is an alert!');
   }
})
.controller('example2Ctrl', function($scope){
   $scope.body = {
      title: "Card Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,"
          + "sed do eiusmod tempor incididunt ut labore et dolore magna"
          + "aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          + "ullamco laboris nisi ut aliquip ex ea commodo consequat."
   };

   $scope.buttons = {
      title: "Do something"
   };

   $scope.buttons2 = {
      title: "Sinaptica",
      src: "https://sinaptica.io/"
   };

   $scope.controllerFunction = function(data) {
      alert(data);
   };
})
.controller('keepSame', function($scope){
   $scope.body = {
      title: "{{ body.title }}",
      text: "{{ body.text }}"
   };

   $scope.buttons = {
      title: "{{ buttons.title }}"
   };

   $scope.buttons2 = {
      title: "{{ buttons2.title }}",
      src: "{{ buttons2.src }}"
   };
});